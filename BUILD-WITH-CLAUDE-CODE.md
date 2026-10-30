# Going live, and making changes with Claude Code

Your website files are already in this GitHub repo. There's also a copy on your Mac in `~/Sites/lifinity-website`.

## 1. Put the site online with Vercel (10 min)

1. Go to https://vercel.com and choose **Sign up with GitHub**.
2. Click **Add New → Project** and **Import** `lifinity-website`.
3. Set **Framework Preset** to **Other**. Leave the build command empty. Click **Deploy**.
4. Open the `….vercel.app` link Vercel gives you and check the page.

From now on, every change saved to GitHub goes live automatically.

## 2. Connect lifinity.ca (10 min)

1. In Vercel, go to **Project → Settings → Domains**. Add `lifinity.ca`, then `www.lifinity.ca`.
2. Copy the DNS records Vercel shows you.
3. Add them in **Cloudflare → lifinity.ca → DNS → Records**:
   - Set **Proxy status = DNS only (grey cloud)**.
   - If a record for `@` or `www` already exists, edit it rather than adding a second one.
   - **Don't touch the MX, SPF (TXT), DKIM or DMARC records.** Those run your email.
4. Wait until Vercel says **Valid Configuration**, then open https://lifinity.ca. You should see a padlock and no warning.

## 3. Connect the newsletter (5 min)

1. In Brevo, go to **Contacts → Forms → Create a subscription form**:
   - Name it "Lifinity website".
   - Use the Email field only.
   - Turn **double opt-in** on.
2. On the **Share** step, copy the **HTML embed code**.
3. Open Claude Code (see below) and say:

   > Here is my Brevo form embed code: [paste]. Put its action URL in the data-action of #news-form in index.html and match the email field name. Keep my design. Then commit and push.

## Making changes with Claude Code

In Finder, open your **Sites** folder and **double-click "Open Lifinity in Claude Code"**.

- The first time, it installs Claude Code and asks you to sign in with your Claude account in the browser.
- After that, it opens straight into your website folder.
- Type what you want in plain English. Examples:

  > Change the hero headline to "…". Keep everything else.

  > Add a testimonials section after "Who I work with" with these quotes (I have written permission): …

  > Commit my changes and push them to GitHub.

The first time Claude Code pushes to GitHub, it may ask you to sign in to GitHub once. Follow its instructions; it will walk you through it.

## Before you share the site publicly

- [ ] Get your MGA's compliance team to approve the page.
- [ ] Confirm you may market under "Lifinity Financial Services Inc."
- [ ] Confirm RRA® allows the "Financial Advisor" title in Ontario and Saskatchewan.
- [ ] Confirm the "How are you paid?" answer matches your contract.
- [ ] Have someone review `privacy.html`.
