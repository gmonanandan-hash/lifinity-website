# Lifinity Website

One-page lead-capture site for lifinity.ca (RRSP & Tax Season Checklist).
Plain static files — no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Landing page |
| `privacy-policy.html` | Plain-language PIPEDA privacy policy |
| `styles.css` | All styles (Deep Autumn palette tokens at the top) |
| `script.js` | Footer year + design-preview form guard |
| `favicon.svg` | Site icon |
| `_headers` | Cloudflare Pages security headers |

## Adding the Brevo form

In `index.html`, search for `BREVO START`. Replace everything between
`BREVO START` and `BREVO END` with the Brevo embed code. In Brevo, add the
opt-in (consent) checkbox and leave it unchecked by default (CASL).

## Deploying to Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Pick this repository.
3. Framework preset: **None**. Build command: *(leave empty)*. Output directory: `/`.
4. Deploy, then add `lifinity.ca` under Custom domains.

## Preview locally

```bash
python3 -m http.server 8000
```
