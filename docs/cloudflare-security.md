# Cloudflare routing and probe protection

Deploy the Astro build output (`dist/`) to the existing Cloudflare Pages project.
The top-level `404.html` disables Pages' fallback to the home page for missing
URLs. `robots.txt` advertises `/sitemap-index.xml`, and `_redirects` sends the
legacy `/sitemap.xml` URL to that sitemap with HTTP 301.
The root keeps its existing `/en` redirect; unsupported `Language=...`
conditions were removed because Cloudflare ignores those redirect lines.

## Activate the security rule

The rule below is prepared but has not been applied to the Cloudflare account.
In the `kevintim.com` zone, open **Security → Security rules**, create a custom
rule named **Block portfolio vulnerability probes**, and select **Block**.
Paste this expression into the expression editor:

```text
(http.host in {"kevintim.com" "www.kevintim.com"} and (
  lower(http.request.uri.path) in {"/.env" "/.git" "/wp-admin" "/wp-login.php"}
  or starts_with(lower(http.request.uri.path), "/.env.")
  or starts_with(lower(http.request.uri.path), "/.git/")
  or starts_with(lower(http.request.uri.path), "/wp-admin/")
))
```

Place it before any broad Skip rules that bypass custom rules, then deploy it.
It targets unused environment-file, Git, and WordPress paths on the portfolio
hostnames. It leaves portfolio pages, assets, sitemaps, and `/.well-known/`
available. Review matches in Security Events after enabling it.

API deployment requires a token with **Zone WAF Write** for this zone. The saved
Wrangler OAuth login does not include that permission.

## Verify after deployment

Check the response status without following redirects:

```sh
curl -sS -o /dev/null -w '%{http_code}\n' https://kevintim.com/en/
curl -sS -o /dev/null -w '%{http_code}\n' https://kevintim.com/a-missing-page
curl -sS -D - -o /dev/null https://kevintim.com/sitemap.xml
curl -sS https://kevintim.com/robots.txt
curl -sS -D - -o /dev/null https://kevintim.com/sitemap-index.xml
curl -sS -o /dev/null -w '%{http_code}\n' https://kevintim.com/.env
curl -sS -o /dev/null -w '%{http_code}\n' https://kevintim.com/.git/config
curl -sS -o /dev/null -w '%{http_code}\n' https://kevintim.com/wp-admin/index.php
```

Expected: the portfolio returns 200; the missing page returns 404; the legacy
sitemap returns 301 with `Location: /sitemap-index.xml` (possibly an absolute
URL); the sitemap index returns 200 XML; and the probe URLs return 403 after
the security rule is enabled, or 404 with only the site changes deployed.
Historical analytics entries remain visible for their original time range.

References: [Pages routing](https://developers.cloudflare.com/pages/configuration/serving-pages/),
[Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/),
[custom security rules](https://developers.cloudflare.com/waf/custom-rules/create-dashboard/).
