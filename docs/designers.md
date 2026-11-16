# For designers

Tessera has a Figma library alongside the code, with the same accent and typeface options. This site is the reference for when and how to use each one.

## 1. Get the Figma library

FIGMA_LINK

To use it across your team's files:

1. Open the Community file and choose **Open in Figma**. A copy lands in your drafts.
2. Move the copy into a team project, then publish it from the **Assets** panel: **Libraries**, then **Publish**.
3. In each design file, open **Libraries** in the Assets panel and turn Tessera on.

When Tessera updates, open the new Community version and publish it again, or copy the changed components into your team's library.

## 2. Pick an accent and typeface

- Switch the **Accent** and **Typeface** variable modes on a frame. Everything inside follows.
- Accents: Indigo (default), Cobalt, Teal, Graphite. Typefaces: Geist (default), IBM Plex, Inter, System UI. Every combination passes WCAG AA.
- One accent per product. Don't mix accents on one screen.
- See them side by side on [Themes](components/Themes.html).

## 3. Choose the right component

- Start from the need, not the look: [Picking a component](components/index.html#picking-a-component) maps needs to components.
- Each component's Figma description has the same *When to use*, *Use something else*, *Do* and *Don't* as its page here.
- Look-alikes are easy to confuse (Badge or Tag, Alert, Banner or Toast, Dialog, Drawer or Popover). [Choosing between look-alikes](components/index.html#look-alikes) sorts them out.

## 4. Design the Tessera way

- **Dense by default.** 32px controls, 16px icons, the smaller spacing step when unsure. Only page layout uses 24px and above.
- **One primary action per view.** Destructive actions use the critical tone and a confirmation.
- **Status colours mean status.** Always pair them with a word or icon.
- **Tokens only.** Colours, type, spacing, radius and shadows come from the library's variables and styles; never detach and restyle.
- **Write like the product.** Sentence case, verb-first buttons, plain error text that says how to fix it.
- The full rules are in [Foundations](foundations.html).

## 5. Hand off

- Name components as this site does in your handoff notes: a Button here is `Tessera.Button` in code.
- Link the component's page on this site; it lists the props the developer will set.
- If nothing fits, compose from existing components and tokens, label it as composed, and flag it, rather than drawing a new style.
- Anything not in Figma, such as a token value, is on [Tokens](tokens.html). Every value also lives in [`tokens.json`](tessera/tokens.json).
