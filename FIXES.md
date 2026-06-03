# Tool Fixes Checklist

## Backend — Scrapers
- [x] `seo_auditor/scraper.py` — fix base_url/path post-redirect, viewport content check, noindex meta, normalize og:image + canonical to absolute, pass bytes to BS4, lang attr
- [x] `speed_checker/scraper.py` — SSRF protection, non-200 issue added, redirect threshold ≥2, label DOM size, content_type in result
- [x] `keyword_density/scraper.py` — fix density denominator (total_words), word-boundary in_title check, ngrams from raw words, phrase density formula, HTTP error check, content-type gate
- [x] `robots_tester/scraper.py` — fix multi-agent accumulation, bot access checks correct URL, per-agent crawl_delay, empty Disallow kept, Content-Type check, truncation flags, Bingbot in path test
- [x] `sitemap_validator/scraper.py` — fix index stats (null not {}), gzip decompression, HTML-as-XML guard, future date→None, year/year-month formats, duplicate URL detection, changefreq+priority validation
- [x] `meta_extractor/scraper.py` — content-type gate, OG name= detection, duplicate OG/Twitter first-wins, dead pass_count removed, http-equiv refresh extracted, all robots directives checked

## Backend — Routers
- [x] `seo_auditor/router.py` — SSRF, recompute base_url from response.url, xhtml+xml support, bytes to BS4, friendly error messages, non-200 warning
- [x] `speed_checker/router.py` — SSRF, ValueError catch
- [x] `keyword_density/router.py` — SSRF, ValueError catch, error message fix (show data.error string)
- [x] `robots_tester/router.py` — SSRF, ValueError catch
- [x] `sitemap_validator/router.py` — SSRF, ValueError catch
- [x] `meta_extractor/router.py` — SSRF, ValueError catch

## Frontend — Clients
- [x] `SeoAuditClient.tsx` — res.ok + data.detail guard, null guards on open_graph/h1_tags, non-200 warning banner, type="text", noindex check display
- [x] `PageSpeedClient.tsx` — redirect label fix (≤1 = None), cache_control ellipsis, FastAPI 422 guard, HTTP status ≥200<300, show content_type, DOM Size label, type="text"
- [x] `KeywordDensityClient.tsx` — show data.error directly, phrase DensityBar same scale (*10), type="text", last-row border fix, empty-state messages
- [x] `RobotsTesterClient.tsx` — "N more" rules label, raw truncation notice, replace --success/error-color with hex, all-allowed message when no robots.txt, duplicate key fix
- [x] `SitemapValidatorClient.tsx` — guard stats?.total_urls crash, child count uses sitemap_count, error fallback when !found, url_count ≥100, type="text", negative age clamped
- [x] `MetaTagsClient.tsx` — title_length 0 shows "0 characters", robots empty=neutral, tab reset on run(), type="text", link_tags truncation notice, status_code display
