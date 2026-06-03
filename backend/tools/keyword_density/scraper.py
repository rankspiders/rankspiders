import ipaddress
import re
from collections import Counter
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

STOP_WORDS = {
    "a","an","the","and","or","but","in","on","at","to","for","of","with",
    "by","from","is","are","was","were","be","been","being","have","has",
    "had","do","does","did","will","would","could","should","may","might",
    "shall","can","this","that","these","those","it","its","i","we","you",
    "he","she","they","me","us","him","her","them","my","our","your","his",
    "their","what","which","who","when","where","why","how","all","each",
    "every","both","few","more","most","other","some","such","no","not",
    "only","so","than","too","very","just","as","up","if","about","into",
    "through","during","before","after","above","below","out","off","over",
    "under","again","then","once","here","there","any","also","while","get",
    "got","use","used","using","make","made","new","one","two","three","four",
    "five","many","much","well","even","back","still","way","take","etc",
    "per","via","whether","within","without","between","across","always",
    "never","often","usually","since","because","know","think","look","come",
    "want","like","need","give","go","see","say","said","now","day","time",
    "year","work","part","place","case","good","high","long","great","little",
    "own","right","big","old","next","early","young","important","public",
    "private","real","best","free","able","sure","let","put","set","run",
    "show","try","ask","seem","feel","left","turn","keep","point","play",
    "small","number","off","always","move","live","where","after","back",
    "little","only","round","man","year","came","show","every","good","give",
    "our","under","name","very","through","just","form","sentence","great",
    "think","say","help","low","line","differ","turn","cause","much","mean",
    "before","move","right","boy","old","too","same","tell","does","set",
    "three","want","air","play","small","end","put","home","read","hand",
    "port","large","spell","add","even","land","here","must","big","high",
    "such","follow","act","why","ask","men","change","went","light","kind",
    "off","need","house","picture","try","again","animal","point","mother",
    "world","near","build","self","earth","father",
}

_PRIVATE_RANGES = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),
]


def _is_private_host(hostname: str) -> bool:
    if not hostname or hostname.lower() == "localhost":
        return True
    try:
        addr = ipaddress.ip_address(hostname)
        return any(addr in net for net in _PRIVATE_RANGES)
    except ValueError:
        return False


def _raw_words(text: str) -> list[str]:
    """All alphabetic words ≥ 3 chars, lowercased — no stop-word removal."""
    return re.findall(r"\b[a-zA-Z]{3,}\b", text.lower())


def _clean_words(text: str) -> list[str]:
    """Stop-word-filtered alphabetic words ≥ 3 chars."""
    return [w for w in _raw_words(text) if w not in STOP_WORDS]


def _word_in_text(word: str, text: str) -> bool:
    """Word-boundary aware check — avoids 'rank' matching 'frankly'."""
    return bool(re.search(r"\b" + re.escape(word) + r"\b", text.lower()))


def _ngrams(words: list[str], n: int) -> list[tuple]:
    return [tuple(words[i:i + n]) for i in range(len(words) - n + 1)]


async def check_keywords(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    if _is_private_host(parsed.hostname or ""):
        raise ValueError("Private or local addresses are not allowed.")

    async with httpx.AsyncClient(
        timeout=10.0, follow_redirects=True,
        headers={"User-Agent": "SpiderAudit/1.0 (Keyword Density; rankspiders.com)"},
    ) as client:
        response = await client.get(url)

    # Check for error responses before parsing
    if response.status_code != 200:
        return {
            "url": str(response.url),
            "error": f"Server returned HTTP {response.status_code}. Cannot analyse an error page.",
        }

    content_type = response.headers.get("content-type", "")
    if "text/html" not in content_type and "application/xhtml+xml" not in content_type:
        return {
            "url": str(response.url),
            "error": f"URL does not return an HTML page ({content_type}). Keyword analysis requires HTML content.",
        }

    soup = BeautifulSoup(response.content, "html.parser")

    # Extract placement-specific text before decomposing
    title_text = soup.find("title").get_text(strip=True) if soup.find("title") else ""
    h1_text = " ".join(h.get_text(strip=True) for h in soup.find_all("h1"))
    h2_text = " ".join(h.get_text(strip=True) for h in soup.find_all("h2"))

    # Strip boilerplate and scripts from body
    for tag in soup(["script", "style", "nav", "footer", "header", "aside", "noscript"]):
        tag.decompose()
    body_text = soup.get_text(separator=" ")

    # raw_words: all words (for ngrams and total count)
    # all_words: stop-word-filtered (for single keyword ranking)
    body_raw = _raw_words(body_text)
    all_words = _clean_words(body_text)
    total_words = len(body_raw)

    if not all_words:
        return {"url": str(response.url), "error": "No readable text found on this page."}

    # Single keywords — density against total_words (consistent denominator)
    word_counts = Counter(all_words)
    top_keywords = [
        {
            "keyword": word,
            "count": count,
            "density": round((count / total_words) * 100, 2) if total_words else 0,
            "in_title": _word_in_text(word, title_text),
            "in_h1": _word_in_text(word, h1_text),
            "in_h2": _word_in_text(word, h2_text),
        }
        for word, count in word_counts.most_common(20)
    ]

    # Phrases — built from raw words (preserves natural consecutive order)
    # Density against (total_words - n + 1) i.e. total possible n-grams
    bigrams = Counter(_ngrams(body_raw, 2))
    bigram_pool = max(total_words - 1, 1)
    top_bigrams = [
        {"phrase": " ".join(p), "count": c, "density": round((c / bigram_pool) * 100, 2)}
        for p, c in bigrams.most_common(15)
        if not all(w in STOP_WORDS for w in p)  # skip all-stop-word phrases
    ][:15]

    trigram_pool = max(total_words - 2, 1)
    trigrams = Counter(_ngrams(body_raw, 3))
    top_trigrams = [
        {"phrase": " ".join(p), "count": c, "density": round((c / trigram_pool) * 100, 2)}
        for p, c in trigrams.most_common(10)
        if not all(w in STOP_WORDS for w in p)
    ][:10]

    warnings = []
    for kw in top_keywords[:5]:
        if kw["density"] > 3:
            warnings.append(
                f'"{kw["keyword"]}" appears {kw["count"]} times ({kw["density"]}%) — '
                f"may be over-optimised. Keep keyword density below 2–3%."
            )

    return {
        "url": str(response.url),
        "total_words": total_words,
        "filtered_words": len(all_words),
        "unique_keywords": len(word_counts),
        "title": title_text,
        "h1": h1_text,
        "top_keywords": top_keywords,
        "top_bigrams": top_bigrams,
        "top_trigrams": top_trigrams,
        "warnings": warnings,
    }
