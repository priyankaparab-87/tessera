Switches for the accent colour and typeface, with a live WCAG check of every accent pair.

- Pick an accent (Indigo, Cobalt, Teal, Graphite), a typeface (Geist, IBM Plex, Inter, System UI) and a mode. The accent and typeface you pick carry over to the other previews in this browser.
- The table on the right measures the rendered colours, so it shows the real ratio for whatever is on screen. Text pairs need 4.5:1; controls, the selected-tab bar and focus rings need 3:1.
- In your own app, set `data-accent` and `data-font` on `<html>`, or call `Tessera.setTheme({ accent, font })`. See "Accent and typeface options" in the README.
- In Figma, switch the Accent and Typeface variable modes on a frame.
