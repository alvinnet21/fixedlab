# FixedLab — website

Landing page for **FixedLab**, local tech repair & IT support in Sydney, NSW (owner: Hutomo Lukman).
Static HTML/CSS/JS — no build step. Open `index.html` or host the folder on any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages).

```
index.html              single-page site (hero, services, how it works, about, FAQ, quote form)
assets/css/style.css    styles — brand tokens at the top (:root)
assets/js/main.js       mobile menu, scroll reveal, quote form
assets/img/             logo mark + favicon (SVG)
```

## Before going live — replace placeholders

- **Phone / WhatsApp**: `0400 000 000` / `tel:+61400000000` in `index.html` (contact section).
- **Social links**: the `href="#"` links in the footer.
- **Business hours**: currently `Mon–Sat · 9am – 6pm`.
- **Email**: `hello@fixedlab.com.au` (in `index.html` and `TO` in `assets/js/main.js`).
- **OG image**: add `assets/img/og-image.png` (1200×630) for link previews.

## Quote form

By default the form opens the visitor's email app with a pre-filled message to the email above.
To receive submissions directly (no email app needed), create a free form at e.g. Formspree and
replace the `mailto` step in `assets/js/main.js` with a `fetch()` POST to the form endpoint.

## Brand

Lime `#9AF20D` · Near Black `#080A09` · Surface `#131614` · Graphite `#252A27` · Muted `#9CA39D` · Off White `#F5F6F4`
Fonts: Space Grotesk (headings), Inter (body).
