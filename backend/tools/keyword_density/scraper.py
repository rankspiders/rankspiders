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
    "five","many","much","well","also","even","back","still","way","take",
    "know","think","look","come","want","like","need","give","go","see","say",
    "said","now","day","time","year","work","part","place","case","good",
    "high","long","great","little","own","right","big","old","next","early",
    "young","important","public","private","real","best","free","able","sure",
}


def _clean_words(text: str) -> list[str]:
    return [w for w in re.findall(r"\b[a-zA-Z]{3,}\b", text.lower()) if w not in STOP_WORDS]


def _ngrams(words: list[str], n: int) -> list[tuple]:
    return [tuple(words[i:i+n]) for i in range(len(words)-n+1)]


async def check_keywords(url: str) -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    async with httpx.AsyncClient(
        timeout=10.0, follow_redirects=True,
        headers={"User-Agent": "SpiderAudit/1.0 (Keyword Density; rankspiders.com)"},
    ) as client:
        response = await client.get(url)

    soup = BeautifulSoup(response.text, "html.parser")

    # Extract placement-specific text
    title_text = soup.find("title").get_text(strip=True) if soup.find("title") else ""
    h1_text = " ".join(h.get_text(strip=True) for h in soup.find_all("h1"))
    h2_text = " ".join(h.get_text(strip=True) for h in soup.find_all("h2"))

    # Body text — strip nav/header/footer/scripts
    for tag in soup(["script", "style", "nav", "footer", "header", "aside"]):
        tag.decompose()
    body_text = soup.get_text(separator=" ")

    all_words = _clean_words(body_text)
    total_words = len(re.findall(r"\b[a-zA-Z]{3,}\b", body_text.lower()))

    if not all_words:
        return {"url": str(response.url), "error": "No readable text found on this page."}

    # Single keywords
    word_counts = Counter(all_words)
    top_keywords = [
        {
            "keyword": word,
            "count": count,
            "density": round((count / len(all_words)) * 100, 2),
            "in_title": word in title_text.lower(),
            "in_h1": word in h1_text.lower(),
            "in_h2": word in h2_text.lower(),
        }
        for word, count in word_counts.most_common(20)
    ]

    # 2-word phrases
    bigrams = Counter(_ngrams(all_words, 2))
    top_bigrams = [
        {"phrase": " ".join(p), "count": c, "density": round((c / len(all_words)) * 100, 2)}
        for p, c in bigrams.most_common(15)
    ]

    # 3-word phrases
    trigrams = Counter(_ngrams(all_words, 3))
    top_trigrams = [
        {"phrase": " ".join(p), "count": c, "density": round((c / len(all_words)) * 100, 2)}
        for p, c in trigrams.most_common(10)
    ]

    # Warnings for over-optimisation
    warnings = []
    for kw in top_keywords[:5]:
        if kw["density"] > 5:
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
