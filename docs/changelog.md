# Changelog

Every change to Tessera that reached the live site, newest first. Each entry says what changed for people using the components, the Figma library or these docs, with a link to the commit.

## 24 Nov 2026

### Changelog page
**Added**
- This page: a timeline of every change that reached the live site. The source is `docs/changelog.md` in the repo.

### Date range picker: confirm before closing
**Changed**
- Choosing a preset or clicking dates only selects them. The calendar stays open, jumps to the selected range and shows it at the bottom with its length, for example “26 Oct 2026 – 24 Nov 2026 · 30 days”.
- The footer has two buttons, **Clear** and **Confirm**. Clear empties the selection and keeps the calendar open. Confirm puts the dates in the field and closes it. Esc or a click outside closes without changing the field.
- With `withTime`, start and end times both default to 00:00.
- DatePicker with `withTime` uses the same Clear and Confirm footer.

Commit: [f36ea24](https://github.com/priyankaparab-87/tessera/commit/f36ea24)

### Date pickers: working presets, clear button, time option
**Fixed**
- DateRangePicker presets did nothing when clicked. They now apply and work from today's date.
- The calendar's “today” was fixed at 14 Sep 2026. It now uses the real date.

**Added**
- A clear button (×) in DatePicker and DateRangePicker once they have a value. Delete or Backspace on the field also clears it. `clearable={false}` hides it.
- More presets: Today, Yesterday, Last 7, 30 and 90 days, This month, Last month, This quarter, Last quarter and Year to date. Custom presets take `{ label, value }`.
- `withTime` on both pickers: time inputs under the calendar, 24-hour by default or 12-hour with `hourCycle={12}`.

**Changed**
- The popover opens at the field's width, and the fields have a minimum width that fits it.
- Escape closes the popover and returns focus to the field.

Commit: [6b903b9](https://github.com/priyankaparab-87/tessera/commit/6b903b9)

## 16 Nov 2026

### Figma Community link
**Added**
- Links to the Tessera library on Figma Community in the site header and the designer guide.

Commit: [7f62cfc](https://github.com/priyankaparab-87/tessera/commit/7f62cfc)

### Mobile layout fix
**Fixed**
- Pages no longer scroll sideways on phones.

**Added**
- Links to the GitHub repo and the live docs.

Commit: [7a866ed](https://github.com/priyankaparab-87/tessera/commit/7a866ed)

### Guides for developers and designers
**Added**
- [For developers](developers.html): install, mount components, add types and theme.
- [For designers](designers.html): get the Figma library, pick a theme, choose components and hand off.

**Removed**
- The single “Get started” page, replaced by the two guides.

Commit: [fffd6ff](https://github.com/priyankaparab-87/tessera/commit/fffd6ff)

### First release
**Added**
- 78 React components, each with a live preview and guidelines.
- Tokens for colour, type, spacing, radius, shadow and size, in light and dark.
- Four accents (indigo, cobalt, teal, graphite) and four typefaces (Geist, IBM Plex, Inter, System UI), all WCAG AA.
- This docs site.

Commit: [00c3c0c](https://github.com/priyankaparab-87/tessera/commit/00c3c0c)
