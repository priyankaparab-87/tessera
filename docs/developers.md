# For developers

Tessera is plain files: two stylesheets and one script that defines `window.Tessera`. It needs React 18. There is no package to install and no build step of its own.

## 1. Get the files

Copy these five files from `dist/` in the repository into your project, for example into `tessera/`:

| File | What it is |
| --- | --- |
| [`tokens.css`](tessera/tokens.css) | Every token as a CSS variable, light and dark, plus the type classes |
| [`bundle.css`](tessera/bundle.css) | Component styles and the accent and typeface options. Loads the fonts from Google Fonts |
| [`bundle.js`](tessera/bundle.js) | The components, as `window.Tessera`. Reads `window.React` |
| [`index.d.ts`](tessera/index.d.ts) | Types and usage notes for every component |
| [`tokens.json`](tessera/tokens.json) | The source of the tokens, for other tools and platforms |

Keep your own copy rather than linking this site, so an update to Tessera never changes your app without you choosing it.

## 2a. A plain HTML page

Load React 18 before `bundle.js`, and the two stylesheets in this order.

```html
<link rel="stylesheet" href="tessera/tokens.css">
<link rel="stylesheet" href="tessera/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="tessera/bundle.js"></script>

<div id="root"></div>
<script>
  const T = window.Tessera, h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(T.Button, { variant: 'primary', iconStart: 'plus' }, 'Create case')
  );
</script>
```

## 2b. An app with a bundler (Vite, webpack)

Install React 18 from npm, then put React on `window` before the bundle runs. Imports run in order, so a one-line module imported first is enough.

```sh
npm install react@18 react-dom@18
```

```js
// src/tessera-react.js
import React from 'react';
window.React = React;
```

```jsx
// src/main.jsx
import './tessera-react.js';      // must come before the bundle
import './tessera/bundle.js';
import './tessera/tokens.css';
import './tessera/bundle.css';
import { createRoot } from 'react-dom/client';

const { Button, Badge } = window.Tessera;

function App() {
  return (
    <>
      <Button variant="primary" iconStart="plus">Create case</Button>
      <Badge tone="success">Paid</Badge>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
```

## 3. TypeScript

Add one declaration file so `window.Tessera` is typed. Props are then checked and the usage notes show on hover.

```ts
// src/tessera-global.d.ts
import type * as TesseraTypes from './tessera/index';
declare global {
  interface Window { Tessera: typeof TesseraTypes }
}
export {};
```

## 4. Use the components

- Every component is on `window.Tessera` under the name shown in [Components](components/index.html): `Button`, `TextField`, `Table` and so on.
- Each component page lists its props and says when to use it, what to use instead, and do and don't.
- Not sure which one fits? Start from [Picking a component](components/index.html#picking-a-component).
- Icons are Tessera's own set. Pass a name such as `iconStart="plus"`, or render `<Icon name="search" />`. The [Icon](components/Icon.html) page shows every name.

## 5. Theme

Set attributes on `<html>`, or on any container to theme just that part:

```html
<html data-theme="dark" data-accent="teal" data-font="geist">
```

Or switch at runtime:

```js
Tessera.setTheme({ accent: 'teal', font: 'inter', mode: 'dark' });
Tessera.getTheme();   // { accent, font, mode }
Tessera.themes;       // the options, for building a switcher
```

- Modes: `light` (default), `dark`. Accents: `indigo` (default), `cobalt`, `teal`, `graphite`. Typefaces: `geist` (default), `plex`, `inter`, `system`.
- `setTheme` remembers accent and typeface in the browser. It never remembers mode, so set `data-theme` from your own setting.
- Try the combinations on [Themes](components/Themes.html).

## 6. Tokens in your own CSS

When you build something Tessera doesn't have, use the tokens, never raw values:

```css
.order-summary {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
  color: var(--text);
  font: var(--text-ui);
}
```

Type also comes as classes: `title-1` to `title-4`, `body`, `ui`, `ui-strong`, `small`, `small-strong`, `mono` and the `num-*` styles for figures. Every token is on [Tokens](tokens.html).

## 7. Update

Replace the five files with the new ones from `dist/`. `tokens.css` is generated from `tokens.json` by `python3 scripts/build.py`; edit `tokens.json`, never `tokens.css`.
