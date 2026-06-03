import ipaddress
import urllib.robotparser
from urllib.parse import urlparse

import httpx

_HEADERS = {"User-Agent": "SpiderAudit/1.0 (Robots Tester; rankspiders.com)"}

_IMPORTANT_BOTS = [
    ("Googlebot", "Google Search"),
    ("Googlebot-Image", "Google Images"),
    ("Bingbot", "Bing"),
    ("DuckDuckBot", "DuckDuckGo"),
    ("Baiduspider", "Baidu"),
    ("YandexBot", "Yandex"),
    ("facebot", "Facebook"),
    ("Twitterbot", "Twitter/X"),
    ("*", "All Bots (wildcard)"),
]

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


async def check_robots(url: str, test_path: str = "") -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    if _is_private_host(parsed.hostname or ""):
        raise ValueError("Private or local addresses are not allowed.")

    base_url = f"{parsed.scheme}://{parsed.netloc}"
    robots_url = f"{base_url}/robots.txt"

    async with httpx.AsyncClient(timeout=10.0, follow_redirects=True, headers=_HEADERS) as client:
        try:
            r = await client.get(robots_url)
            # Accept only HTTP 200 with a text content type
            ct = r.headers.get("content-type", "").lower()
            found = r.status_code == 200 and ("text/plain" in ct or "text/" in ct)
            if not found and r.status_code == 200:
                # Still try to parse if body looks like robots.txt (text/html CDN error pages won't)
                body_start = r.text.strip()[:30].lower()
                found = "user-agent" in body_start or "disallow" in body_start or "sitemap" in body_start
            raw = r.text if found else ""
            status_note = None if r.status_code == 200 else f"robots.txt request returned HTTP {r.status_code}"
        except Exception:
            found = False
            raw = ""
            status_note = None

    if not found:
        return {
            "url": url,
            "robots_url": robots_url,
            "found": False,
            "raw": "",
            "raw_truncated": False,
            "rules": [],
            "sitemaps": [],
            "crawl_delay": None,
            "bot_access": [
                {"bot": bot, "name": name, "allowed": True}
                for bot, name in _IMPORTANT_BOTS
            ],
            "test_path_result": None,
            "recommendation": (
                "No robots.txt found. All crawlers are unrestricted — they can access every page. "
                "Adding a robots.txt is best practice and helps manage crawl budget."
            ),
        }

    # Parse with stdlib (handles wildcards, Allow/Disallow precedence correctly)
    rp = urllib.robotparser.RobotFileParser()
    rp.set_url(robots_url)
    rp.parse(raw.splitlines())

    # Manual parse for structured display output
    rules_map: dict = {}
    sitemaps = []
    crawl_delays: dict[str, float] = {}  # per-agent crawl delays
    current_agents: list[str] = []

    for line in raw.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if ":" not in line:
            continue
        key, _, value = line.partition(":")
        key = key.strip().lower()
        value = value.strip()

        if key == "user-agent":
            # Accumulate consecutive User-agent lines into the same group
            if current_agents and value not in current_agents:
                current_agents.append(value)
            else:
                current_agents = [value]
            if value not in rules_map:
                rules_map[value] = {"disallows": [], "allows": []}
        elif key == "disallow" and current_agents:
            for agent in current_agents:
                rules_map.setdefault(agent, {"disallows": [], "allows": []})["disallows"].append(value)
        elif key == "allow" and current_agents:
            for agent in current_agents:
                rules_map.setdefault(agent, {"disallows": [], "allows": []})["allows"].append(value)
        elif key == "sitemap":
            if value:
                sitemaps.append(value)
        elif key == "crawl-delay" and current_agents:
            try:
                delay = float(value)
                for agent in current_agents:
                    crawl_delays[agent] = delay
            except ValueError:
                pass

    rules = [
        {"user_agent": agent, "disallows": data["disallows"], "allows": data["allows"]}
        for agent, data in rules_map.items()
    ]

    # Summarise crawl delay: prefer wildcard, then any other
    crawl_delay = crawl_delays.get("*") or (next(iter(crawl_delays.values()), None) if crawl_delays else None)

    # Bot access — check against the actual page URL (or root if no test path)
    check_url = url
    bot_access = [
        {
            "bot": bot,
            "name": name,
            "allowed": rp.can_fetch(bot, check_url),
        }
        for bot, name in _IMPORTANT_BOTS
    ]

    # Test a specific path if provided
    test_result = None
    if test_path:
        test_url = base_url + ("/" if not test_path.startswith("/") else "") + test_path
        test_result = {
            "path": test_path,
            "url_tested": test_url,
            "allowed_for_googlebot": rp.can_fetch("Googlebot", test_url),
            "allowed_for_bingbot": rp.can_fetch("Bingbot", test_url),
            "allowed_for_all": rp.can_fetch("*", test_url),
        }

    googlebot_blocked = not rp.can_fetch("Googlebot", url)
    all_blocked = not rp.can_fetch("*", url)
    if googlebot_blocked:
        rec = "Googlebot is blocked from this URL. If this is intentional (e.g. staging), ensure your live site allows it."
    elif all_blocked:
        rec = "All bots are blocked from this URL via the wildcard rule."
    elif crawl_delay and crawl_delay > 10:
        rec = f"Crawl-delay is set to {crawl_delay}s which is very restrictive. Values above 5 can slow indexing."
    else:
        rec = "robots.txt looks healthy. Googlebot and major crawlers can access this URL."

    raw_truncated = len(raw) > 3000
    result = {
        "url": url,
        "robots_url": robots_url,
        "found": True,
        "raw": raw[:3000],
        "raw_truncated": raw_truncated,
        "rules": rules,
        "rules_truncated": len(rules) > 10,
        "sitemaps": sitemaps,
        "crawl_delay": crawl_delay,
        "crawl_delays_per_agent": crawl_delays,
        "bot_access": bot_access,
        "test_path_result": test_result,
        "recommendation": rec,
    }
    if status_note:
        result["status_note"] = status_note
    return result
