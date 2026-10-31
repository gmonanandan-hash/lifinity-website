# Lifinity website: notes for Claude Code

This repo is the public website for **Lifinity Financial Services Inc.** (lifinity.ca), the advisory practice of
**G Mon (Anandakrishnan Gopalakrishnan), RRA®**, a life-licensed Financial Advisor in Halifax, NS.

The site has one job: get the right people to **book a discovery call** through the Zoom routing form.
Everything else on the page supports that.

## Stack

- Plain static site. No framework, no build step, no npm. Everything sits in the repo root:
  - `index.html`: the landing page (all CSS and JS inline)
  - `privacy.html`: privacy notice
  - Images: `gmon-portrait.webp`, `lifinity-logo.svg`, `lifinity-logo-reversed.svg`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`
  - Docs: `PLAYBOOK.md`
- Hosted on Vercel, deployed automatically from the `main` branch.
- DNS is on Cloudflare. Vercel records must stay **DNS only (grey cloud)**.
- Never touch the MX, SPF, DKIM or DMARC records. Email runs through Cloudflare Email Routing (inbound) and Brevo (outbound).
- Preview locally with `python3 -m http.server 8000`, then open http://localhost:8000.

## Links that must stay correct

- Book a call, used on every CTA: `https://scheduler.zoom.us/f/1klh9gol`
- Instagram: `https://www.instagram.com/gmontalks`
- Email: `gmon@lifinity.ca`
- Phone: `+1 (902) 537-0036`
- Office: 63 Farnham Gate Road, Unit 104, Halifax, NS
- Newsletter form: `data-action` on `#news-form` holds the Brevo form URL. The field name is `EMAIL`.
  - While it still says `REPLACE_WITH_BREVO_FORM_ACTION`, the form shows a friendly fallback message.

## Brand (Option 1, "Life, continued")

**Logo**

- An L mark with three rising copper dots, plus the "Lifinity" wordmark.
- Use the logo files in the repo root. Never redraw, recolour or stretch them.
  - `lifinity-logo.svg`: for light backgrounds
  - `lifinity-logo-reversed.svg`: for dark backgrounds

**Colours (CSS tokens in `:root`)**

| Name | Hex | Use |
|---|---|---|
| Evergreen | `#0F3D36` | Brand, headings, dark bands |
| Copper | `#B8693C` | Accent only, used sparingly. CTA buttons use the darker `#A2582E` for contrast. |
| Stone | `#EEEFEA` | Page background |
| Ink | `#1B1A17` | Body text |

Neutrals lean slightly green, for example the muted text `#55605C`. Don't use pure grey.

**Type**

- Spectral for headings and the founder letter.
- Source Sans 3 for body text.
- IBM Plex Mono for small uppercase labels.
- All three come from Google Fonts. Don't add more families.

**Motif**

- The L corner and the three rising dots: on the eyebrows, the portrait frame and the four-stage "rising dots" chart.
- Repeat the motif, but don't add new decorative ideas.

**Layout rules**

- Left-aligned text. Never centre a paragraph longer than two lines.
- One radius everywhere (4px). Thin 1px lines in place of heavy cards and shadows.
- No gradients, no glows, no emoji, no stock photos.
- One clear CTA colour (copper). Everything else stays calm.
- Motion stays subtle: hover states and the dots rising once on load. Respect `prefers-reduced-motion`.
- Avoid: sliders, carousels, preloaders, scroll-jacking, typewriter effects, custom cursors, full-screen heroes.

## How to write copy here

These rules come from the copywriting and design tutorials in `PLAYBOOK.md`.

1. **Lead with value, then how.** Headline = what the reader gets. Subline = how it happens and who it's for.
2. **Harry Dry's three tests for every line:** Can I visualise it? Can I falsify it? Could nobody else say it?
   - If a line fails all three, rewrite it.
3. **Facts over opinions.** Write "45-minute call", "licensed in 5 provinces", "a written summary after every call". Not "expert", "best", "trusted".
4. **Juxtaposition.** The page's argument is *product first vs plan first*. New sections should support that contrast.
5. **Lead with the idea, not the process.** The hero carries Lifinity's long-term planning idea ("Plan for life. Build for generations.") and the three i's in Lifinity: Insurance, Investment, Independence. Keep the hero corporate and professional. How G Mon is paid belongs in the FAQ, the comparison and his story, not the hero. Avoid policy-first wording up top.
6. **Short and plain.** Active voice. No buzzwords ("unlock", "empower", "seamless", "next level").
   - No mannered em-dash asides. Use Canadian spelling.
7. **Voice of customer.** When real clients describe their problem in their own words, use their words, with permission.

## Compliance guardrails (do not break these)

G Mon is a **life and accident & sickness (LLQP) licensed agent** in NS, ON, AB, BC and SK, contracted through an MGA.

- **No guarantees or promised returns.** Never write "guaranteed", "risk-free", "tax-free wealth", "infinite", "money forever" or "infinite banking".
- **Stay inside the licence.**
  - Insurance and segregated funds only.
  - Never imply he sells or manages stocks, ETFs or mutual funds, or gives tax or legal advice.
  - "Investment" (one of the three i's) means savings plans such as TFSA, RRSP and FHSA through segregated funds until securities licensing is in place.
  - Say "help cover estate costs", not "minimise taxes".
- **Never say "free".** Don't call the call "free" or "complimentary". It's a "discovery call".
- **No invented proof.**
  - Never add fabricated testimonials, reviews, client counts, logos or awards.
  - Testimonials need the client's written permission and must follow MGA/regulator rules.
- **Insurer and MGA names and logos** only with written permission and compliance approval. The MGA's name is deliberately not on the site.
- **Keep the licensing line in the footer.** Keep the general-information disclaimer.
- **Title.** "Financial Advisor" is a protected title in Ontario (FSRA) and Saskatchewan. Confirm the RRA credential qualifies before launch.
  - If it doesn't, change the title everywhere to "Life & Health Insurance Advisor".
- **Privacy.**
  - Collect only what the page needs.
  - If you add analytics, cookies or another form, update `privacy.html` first.
  - Newsletter consent wording must stay next to the form (CASL).
- **Keep the process light.** Never promise that recommendations only come at a second meeting or that nothing is decided on the first call. G Mon may recommend coverage on the first call when there is a clear gap, then sends a written summary. The booking form already confirms people are ready to look at solutions.
- Any new claim or section should be reviewed by MGA compliance before it goes live.

## When you change things

- Keep everything in `index.html` unless the change is large. This site is meant to stay simple.
- After any change, check at 1440px and 390px wide, in light and dark mode. The page must never scroll sideways.
- Commit with a short, clear message and push to `main`. Vercel deploys it automatically.
