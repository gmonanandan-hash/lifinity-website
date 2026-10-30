# Launch lifinity.ca with Claude Code and GitHub

This folder is your finished website. Follow these steps once and lifinity.ca goes live. After that, you change the
site by asking Claude Code in plain English.

**Time:** about 45 minutes.
**You need:**

- your Mac
- your GitHub account (gmonanandan-hash)
- a Claude Pro or Max plan
- a free Vercel account
- Brevo and Cloudflare, which you already use

---

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The landing page |
| `privacy.html` | Privacy notice, linked from the footer |
| `assets/` | Logo, portrait, favicons, share image |
| `CLAUDE.md` | Your brand, copy and compliance rules. Claude Code reads this automatically every time. |
| `docs/PLAYBOOK.md` | What the design and copywriting tutorials taught, and how it shaped the page |
| `vercel.json` | Hosting settings |

---

## Step 1. Install Claude Code (5 min)

Open **Terminal** (press Cmd+Space, type "Terminal", press Enter). Paste this and press Enter:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Close Terminal, open it again, and check that it worked:

```bash
claude --version
```

It should print a version number. If it says "command not found", follow the PATH fix at
https://code.claude.com/docs/en/troubleshoot-install

## Step 2. Get your GitHub repo onto your Mac (5 min)

```bash
cd ~/Sites
git clone https://github.com/gmonanandan-hash/lifinity-website.git
cd lifinity-website
```

If git asks you to sign in, use the browser prompt or GitHub Desktop.

## Step 3. Put the website files in the repo (2 min)

1. Unzip `lifinity-website.zip`.
2. Copy everything inside it (index.html, privacy.html, assets, CLAUDE.md, docs, vercel.json, README.md) into `~/Sites/lifinity-website`.
3. If it asks, replace README.md.

## Step 4. Start Claude Code in the folder (1 min)

```bash
cd ~/Sites/lifinity-website
claude
```

The first time, it opens your browser to sign in with your Claude account.

## Step 5. Paste these prompts, one at a time

Wait for each to finish. Claude Code asks before it changes files; read what it plans to do, then approve.

**Prompt 1: check everything**

```text
Read CLAUDE.md first. Then start a local preview of index.html (python3 -m http.server 8000) and check the page at
1440px and 390px wide in light and dark mode. Check that every "Book a call" button goes to
https://scheduler.zoom.us/f/1klh9gol, the privacy link works, and nothing scrolls sideways on a phone.
Report anything broken and fix it, but don't change any copy, colours or fonts without asking me.
```

**Prompt 2: connect the newsletter to Brevo**

Do this in Brevo first:

1. Go to **Contacts → Forms → Create a subscription form**. Call it "Lifinity website".
2. Keep only the Email field.
3. Turn on **double opt-in**. This is the safest option under CASL.
4. Choose your list, then go to the **Share** step and copy the **HTML embed code**.

Then in Claude Code:

```text
Here is my Brevo subscription form embed code: [paste it here]
Find the form's action URL and the email field name in it. Put the URL in the data-action attribute of #news-form in
index.html (replacing REPLACE_WITH_BREVO_FORM_ACTION) and make sure the email input's name matches Brevo's field name.
Keep my own form design; don't paste Brevo's styling into the page.
```

**Prompt 3: publish to GitHub**

```text
Commit all files with the message "Launch Lifinity landing page" and push to main.
```

## Step 6. Put it on the internet with Vercel (10 min)

1. Go to https://vercel.com and **Sign up with GitHub**.
2. Click **Add New → Project** and import `lifinity-website`.
3. Set **Framework Preset: Other**. Leave the build command empty, and set the output directory to the root (`./`).
4. Click **Deploy**. In about a minute you get a link like `lifinity-website.vercel.app`. Open it and check it.

From now on, every push to `main` updates the live site automatically.

## Step 7. Connect lifinity.ca (10 min)

1. In Vercel, go to **Project → Settings → Domains**. Add `lifinity.ca`, then `www.lifinity.ca`.
2. Vercel shows the DNS records it needs, usually one record for the root domain and a CNAME for www. Copy the exact values Vercel shows you.
3. In **Cloudflare → lifinity.ca → DNS → Records**, add those records:
   - Set **Proxy status = DNS only (grey cloud)**. If the cloud is orange, Vercel can't issue the SSL certificate. That's what causes the "Privacy error" warning.
   - If an old A, AAAA or CNAME record already exists for `@` or `www`, edit it instead of adding a duplicate.
   - **Don't touch the MX, SPF (TXT), DKIM or DMARC records.** Those run your email: Cloudflare Email Routing and Brevo.
4. Back in Vercel, wait until both domains show **Valid Configuration**. This usually takes minutes, sometimes up to an hour.
5. Open https://lifinity.ca. You should see the padlock and no warning.

## Step 8. Test like a visitor (5 min)

- Click every **Book a call** button. Each one should open your "Before We Book a Time" form.
- Subscribe with a second email address. You should get Brevo's confirmation email.
- Open the site on your phone.
- Share the link in a WhatsApp chat to yourself. The preview card should show your logo and "Get a plan before you get a policy."

---

## Before you share it publicly: compliance checklist

- [ ] Send the page (or the preview link) to your MGA's compliance team for approval.
- [ ] Confirm you may market under "Lifinity Financial Services Inc." with your MGA and the provincial regulators. If the corporation isn't licensed yet, ask compliance what wording they need until it is.
- [ ] Confirm your RRA® credential lets you use "Financial Advisor" in Ontario (FSRA) and Saskatchewan. If not, ask Claude Code: *"Change my title everywhere on the site to Life & Health Insurance Advisor."*
- [ ] Confirm the "How are you paid?" answer is accurate for your contract.
- [ ] Have someone review `privacy.html`. It's a solid starting draft, not legal advice.

## Changing the site later: example prompts

```text
Add a testimonials section after "Who I work with" using these quotes (I have written permission): [paste]
```

```text
Change the hero headline to: [new headline]. Keep everything else.
```

```text
Add a French version of the page at /fr with the same design.
```

```text
Make the "Book a call" button in the nav say "Book a discovery call" on desktop only.
```

Each time, Claude Code follows the rules in CLAUDE.md. After you approve, ask it to commit and push, and Vercel updates the site.
