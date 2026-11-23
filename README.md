# FixedLab — website

Landing page for **FixedLab**, local tech repair & IT support in Sydney, NSW (owner: Hutomo Lukman).
Static HTML/CSS/JS — no build step. Open `index.html` or host the folder on any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages).

```
index.html              home page (hero, services, how it works, contact)
faq.html                FAQ page
assets/css/style.css    styles — brand tokens at the top (:root)
assets/js/main.js       mobile menu, action bar
assets/fonts/           self-hosted fonts (woff2)
assets/img/             logo (from client), favicon, icons.svg sprite, brands/ (service brand logos), circuit background
tools/make_circuit.py   regenerates the random circuit background (python3 tools/make_circuit.py <seed>)
CARA-EDIT.md            how to edit text on GitHub (Bahasa Indonesia)
```

## Contact details

- Text message: 0422 092 458 (`sms:+61422092458`)
- Email: hello@fixedlab.com.au
- Instagram: https://www.instagram.com/fixedlab
- Location: Mascot, NSW
- **Fonts**: waiting for the brand fonts from Tomo — put the files in `assets/fonts/`, update the
  `@font-face` rules and `--font-display` / `--font-body` in `style.css`.

## Brand

Lime `#9AF20D` · Near Black `#080A09` · Surface `#131614` · Graphite `#252A27` · Muted `#9CA39D` · Off White `#F5F6F4`
Fonts: placeholder Space Grotesk + Inter until the brand fonts arrive.

## Hosting (GitHub Pages)

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → Save.
Live at https://alvinnet21.github.io/fixedlab/ after ~1 minute. For the custom domain `fixedlab.com.au`,
enter it under Settings → Pages → Custom domain and point the domain's DNS to GitHub Pages.
