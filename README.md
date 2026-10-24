# shrey.cluster — Personal Portfolio

My portfolio, designed as a live infrastructure control plane: I'm the cluster, each section is a node, and packets flow between them. It's a nod to the storage, Kubernetes and replication work I did at HPE.

## Tech Stack
- React 19 + Vite
- [Motion](https://motion.dev) for animation
- Hand-written SVG and CSS (design tokens, light/dark themes)
- Netlify (CI/CD & hosting)

## Features
- Interactive cluster map hero, with a **simulate failover** demo that reroutes traffic through a peer node
- `kubectl describe`-style About panel, a scroll-driven replication timeline with count-up metrics, and project "pods" with always-visible results
- Contact section with email, LinkedIn and GitHub, plus an optional message form (currently off, see [Contact form](#contact-form))
- Light/dark theme toggle, keyboard accessible, and respects `prefers-reduced-motion`
- Content lives in `src/data/`, so updates don't touch components

## Development
```bash
npm install
npm run dev     # local dev server
npm run lint
npm run build   # production build in dist/
```

## Deployment
The site is deployed on Netlify with continuous deployment enabled.
Every push to the main branch triggers an automatic build and deploy.

## Contact form
The Contact section has a terminal-style message form ("ping shrey") that delivers messages through Netlify Forms, protected by a reCAPTCHA v2 checkbox. It is **currently turned off**.

### Turn it on or off
In `src/data/profile.js`, set `contactForm: true` (on) or `false` (off), then push to `main`. Nothing else in the code needs to change.

### How it works
- `src/components/Contact.jsx`: the form. It posts to Netlify Forms as the form named `contact`, with fields `name`, `email` and `message`.
- `index.html`: a hidden static copy of the same form. Netlify needs it to detect a form rendered by React. It is marked `data-netlify-recaptcha="true"` and `netlify-honeypot="bot-field"`, so keep it even while the form is off.
- `src/components/Recaptcha.jsx`: the "I'm not a robot" checkbox. Google's script loads only once a visitor clicks into the form, and each message needs a fresh check.
- `vite.config.js`: puts the public site key (`SITE_RECAPTCHA_KEY`) into the build.
- A hidden honeypot field (`bot-field`) catches simple bots, and Netlify's spam filter (Akismet) screens the rest.

### Settings outside the code (already configured, check they still exist)
- **Netlify → Forms → Form detection:** enabled. The `contact` form should be listed under Active forms.
- **Netlify → Forms → Submission notifications:** an email notification to my Gmail for any form, with subject "Email from Netlify Portfolio".
- **Netlify → Project configuration → Environment variables:**
  - `SITE_RECAPTCHA_KEY`: the reCAPTCHA **site** key. Do **not** mark it secret: it ships in the page, and Netlify's secret scanning would fail the build.
  - `SITE_RECAPTCHA_SECRET`: the reCAPTCHA **secret** key, marked secret and scoped to Builds, Functions and Runtime. Runtime is what Forms uses.
- **Google reCAPTCHA admin** (google.com/recaptcha/admin): a **v2 "I'm not a robot" Checkbox** key (v3 does not work with Netlify Forms), with domain `shrey-deshmukh.netlify.app`. It belongs to a Google Cloud project; no billing is attached.

### Test after turning it on
1. Wait for the Netlify deploy to show **Published**, then hard-refresh the live site (Ctrl+Shift+R).
2. Click into the form: the checkbox should appear, and **ping shrey** stays disabled until it is ticked.
3. Send a message. The terminal should show `message delivered ✓`, the submission should appear under Netlify → Forms → `contact`, and an email should arrive (check spam the first time).

### Gotchas
- **Local dev can't deliver messages.** `npm run dev` and `npm run preview` have no Netlify Forms, so sending shows the red "not delivered" fallback. That is expected; test on the live site.
- **"Invalid site key"** in the checkbox: the site's domain isn't registered in the reCAPTCHA admin.
- **No checkbox at all:** `SITE_RECAPTCHA_KEY` didn't reach the build. Check the variable name, then run Netlify → Deploys → Trigger deploy → **Clear cache and deploy site**.
- **Checkbox works but sending fails:** `SITE_RECAPTCHA_SECRET` is missing or wrong.
- **Replying:** notification emails come from `formresponses@netlify.com`, so use the visitor's address shown in the email, not Reply.
- **Limits:** the Netlify free plan caps form submissions per month, and reCAPTCHA is free up to 10,000 checks per month.

## Live Site
👉 https://shrey-deshmukh.netlify.app/
