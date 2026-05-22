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


async def check_robots(url: str, test_path: str = "") -> dict:
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    parsed = urlparse(url)
    base_url = f"{parsed.scheme}://{parsed.netloc}"
    robots_url = f"{base_url}/robots.txt"

    async with httpx.AsyncClient(timeout=10.0, follow_redirects=True, headers=_HEADERS) as client:
        try:
            r = await client.get(robots_url)
            found = r.status_code == 200
            raw = r.text if found else ""
        except Exception:
            found = False
            raw = ""

    if not found:
        return {
            "url": url,
            "robots_url": robots_url,
            "found": False,
            "raw": "",
            "rules": [],
            "sitemaps": [],
            "crawl_delay": None,
            "bot_access": [],
            "test_path_result": None,
            "recommendation": "No robots.txt found. While not mandatory, it helps control crawler behaviour and is a best practice.",
        }

    # Parse with stdlib
    rp = urllib.robotparser.RobotFileParser()
    rp.set_url(robots_url)
    rp.parse(raw.splitlines())

    # Manual parse for structured output
    rules_map: dict = {}
    sitemaps = []
    crawl_delay = None
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
            current_agents = [value]
            for agent in current_agents:
                if agent not in rules_map:
                    rules_map[agent] = {"disallows": [], "allows": []}
        elif key == "disallow" and current_agents:
            for agent in current_agents:
                if value:
                    rules_map.setdefault(agent, {"disallows": [], "allows": []})["disallows"].append(value)
        elif key == "allow" and current_agents:
            for agent in current_agents:
                if value:
                    rules_map.setdefault(agent, {"disallows": [], "allows": []})["allows"].append(value)
        elif key == "sitemap":
            sitemaps.append(value)
        elif key == "crawl-delay":
            try:
                crawl_delay = float(value)
            except ValueError:
                pass

    rules = [
        {"user_agent": agent, "disallows": data["disallows"], "allows": data["allows"]}
        for agent, data in rules_map.items()
    ]

    # Check each important bot
    bot_access = [
        {
            "bot": bot,
            "name": name,
            "allowed": rp.can_fetch(bot, url),
        }
        for bot, name in _IMPORTANT_BOTS
    ]

    # Test a specific path if provided
    test_result = None
    if test_path:
        test_url = base_url + ("/" if not test_path.startswith("/") else "") + test_path
        test_result = {
            "path": test_path,
            "allowed_for_googlebot": rp.can_fetch("Googlebot", test_url),
            "allowed_for_all": rp.can_fetch("*", test_url),
        }

    # Recommendation
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

    return {
        "url": url,
        "robots_url": robots_url,
        "found": True,
        "raw": raw[:3000],
        "rules": rules,
        "sitemaps": sitemaps,
        "crawl_delay": crawl_delay,
        "bot_access": bot_access,
        "test_path_result": test_result,
        "recommendation": rec,
    }
