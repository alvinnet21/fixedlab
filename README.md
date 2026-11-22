# FixedLab — website

Landing page for **FixedLab**, local tech repair & IT support in Sydney, NSW (owner: Hutomo Lukman).
Static HTML/CSS/JS — no build step. Open `index.html` or host the folder on any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages).

```
index.html              home page (hero, services, how it works, quote form)
faq.html                FAQ page
assets/css/style.css    styles — brand tokens at the top (:root)
assets/js/main.js       mobile menu, action bar, quote form
assets/fonts/           self-hosted fonts (woff2)
assets/img/             logo (from client), favicon, icons.svg sprite, circuit background
tools/make_circuit.py   regenerates the random circuit background (python3 tools/make_circuit.py <seed>)
CARA-EDIT.md            how to edit text on GitHub (Bahasa Indonesia)
```

## Before going live — replace placeholders

- **Phone / WhatsApp**: `0400 000 000` / `tel:+61400000000` in `index.html` (contact section).
- **Social links**: the `href="#"` links in the footer.
- **Business hours**: currently `Mon–Sat · 9am – 6pm`.
- **Email**: `hello@fixedlab.com.au` (in `index.html` and `TO` in `assets/js/main.js`).
- **Fonts**: waiting for the brand fonts from Tomo — put the files in `assets/fonts/`, update the
  `@font-face` rules and `--font-display` / `--font-body` in `style.css`.
- **How it works / FAQ**: content still to be confirmed by Tomo.

## Quote form

By default the form opens the visitor's email app with a pre-filled message to the email above.
To receive submissions directly (no email app needed), create a free form at e.g. Formspree and
replace the `mailto` step in `assets/js/main.js` with a `fetch()` POST to the form endpoint.

## Brand

Lime `#9AF20D` · Near Black `#080A09` · Surface `#131614` · Graphite `#252A27` · Muted `#9CA39D` · Off White `#F5F6F4`
Fonts: placeholder Space Grotesk + Inter until the brand fonts arrive.

## Hosting (GitHub Pages)

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → Save.
Live at https://alvinnet21.github.io/fixedlab/ after ~1 minute. For the custom domain `fixedlab.com.au`,
enter it under Settings → Pages → Custom domain and point the domain's DNS to GitHub Pages.
