# Tessera

A calm, dense design system for internal tools and data-heavy web apps: queues, records, dashboards and back-offices. Neutral gray surfaces do the work, one accent marks what you can act on, and status colours only ever mean status.

- 78 React components, each with a live preview and guidelines (when to use, what to use instead, do and don't)
- Tokens for colour, type, spacing, radius, shadow and size, in light and dark
- Four accents (indigo, cobalt, teal, graphite) and four typefaces (Geist, IBM Plex, Inter, System UI); every combination passes WCAG AA

**Docs:** https://tessera-4df.pages.dev. Start with [For developers](https://tessera-4df.pages.dev/developers) or [For designers](https://tessera-4df.pages.dev/designers).

**Figma:** [Tessera on Figma Community](https://www.figma.com/community/file/1704195448507830727/tessera)

## Use it

Tessera is plain files. There is no package to install and no build step. Copy `dist/` into your project, then:

```html
<link rel="stylesheet" href="tessera/tokens.css">
<link rel="stylesheet" href="tessera/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="tessera/bundle.js"></script>
```

```js
const T = window.Tessera, h = React.createElement;
ReactDOM.createRoot(document.getElementById('root')).render(
  h(T.Button, { variant: 'primary', iconStart: 'plus' }, 'Create case')
);
```

Theme with attributes on `<html>` (`data-theme`, `data-accent`, `data-font`) or `Tessera.setTheme({ accent: 'teal', font: 'inter' })`.

## What's in the repo

| Path | What it is |
| --- | --- |
| `dist/tokens.json` | Source of every token |
| `dist/tokens.css` | Tokens as CSS variables and type classes, generated from `tokens.json` |
| `dist/bundle.css` | Component styles, accent and typeface options (loads fonts from Google Fonts) |
| `dist/bundle.js` | The components, as `window.Tessera`; needs React 18 on the page |
| `dist/index.d.ts` | Types and usage notes for every component |
| `docs/` | The brand book (`README.md`), the guides for developers and designers, and each component's guidelines and preview |
| `scripts/build.py` | Builds `dist/tokens.css` and the docs site into `site/` |
| `site/` | The built docs site, deployed as is |

## Build the docs

```sh
python3 scripts/build.py
```

Python 3 standard library only. Open `site/index.html` through any static server.

## Licence

MIT. See [LICENSE](LICENSE). Fonts are loaded from Google Fonts under their own licences.

Designed and built by Priyanka Parab.
