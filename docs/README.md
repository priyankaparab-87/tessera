Tessera is a calm, dense system for product UI: internal tools and data-heavy web apps such as queues, records, dashboards and back-offices. Neutral gray surfaces do the work; one indigo accent marks what you can act on; status colours only ever mean status.

## Content fundamentals

- **Plain and functional.** Say what something does and what happens next: “Your export is running. We’ll email you when it’s ready.”
- **Address the user as “you”.** Use “we” only for the product team in help or error copy.
- **Sentence case everywhere:** page titles, buttons, tabs, labels, badges. “Create case”, not “Create Case”.
- **Buttons are verbs** that name the result: “Export report”, “Delete case”. Never “OK”, “Submit” or “Click here”.
- **Labels are short nouns** (“Assignee”, “Order ID”). Mark required fields with `*`. Error text is one instruction: “Enter a value up to 100.”
- **Dates** read “2 Sep 2026, 10:12”: day, short month with a capital, year, 24-hour time.
- **IDs** are set in `mono` and followed by a CopyButton.
- **No emoji** in product UI. No exclamation marks except in success copy that earns one.

## Visual foundations

### Colour
- Pages sit on `bg-page`. Cards, the app header and inputs are `surface`. Anything that floats (menus, popovers, dialogs, drawers) is `surface-raised`, which is lighter than `surface` in dark mode. Grouping zones (board columns, table headers, read-only fields, skeletons) are `surface-muted`.
- Tooltips and toasts use `surface-inverse` with `text-inverse`.
- Text is `text` for content, `text-subtle` for secondary text and labels, and `text-muted` for metadata, placeholders and timestamps. All three hold 4.5:1 on `surface`, `surface-raised`, `surface-muted` and `bg-page` in both themes.
- **One accent per product** (indigo by default; see Accent and typeface options for cobalt, teal and graphite). `accent` fills the primary button, checked controls, the selected-tab bar, sliders and progress. `text-accent` is for links and selected labels. `accent-subtle` is for selected rows, nav items, today in calendars and accent badges. Use at most one primary button per view.
- **Status colours mean status only:** `info` (sky blue), `success` (green), `warning` (amber), `critical` (red), plus `new` (violet) for new or beta features. Each has a `-subtle` ground for badges, alerts and banners. Always pair a status colour with a word or icon.
- Priority maps Low → neutral, Medium → `warning`, High → `critical`.
- Hover on transparent controls and rows is `surface-hover`; pressed is `surface-active`. Filled controls darken to `accent-hover`.
- Decorative edges (cards, tables, dividers) use `border`, and rows inside a card use `border-subtle`. Interactive edges (inputs, checkboxes, radios, switches, secondary buttons) use `border-control`, which holds 3:1.

### Type
- Three typefaces, three jobs. **Geist** (`--font-sans`) sets all text: body copy, labels, titles and subtitles. **IBM Plex Sans** (`--font-numeric`) sets figures: amounts, counts, percentages, dates and times, with tabular (equal-width) digits so columns line up. **Geist Mono** (`--font-mono`) sets IDs, keys and code. All three load from Google Fonts.
- Put a standalone figure in the `num-*` styles (`num-display` for Stat values, `num-ui` for amounts and dates in cells, `num-small-strong` for counts) or give its element the `ts-num` class. Components already do this for Stat, tab and nav counts, pagination, progress values, calendar days, number fields, date and time pickers, timeline and comment times, and right-aligned table columns (set `numeric: true` on any other numeric column, `numeric: false` to opt out). Keep figures inside a sentence in the sentence's font.
- IBM Plex, Inter (with JetBrains Mono) and System UI are alternatives; see Accent and typeface options.
- `ui` (14/20) is the workhorse for table cells, field values and card content. `ui-strong` is for labels, buttons and tabs.
- Titles are 600 weight and stay small, as in developer tools: `title-1` (24/32) for an overview or landing page, `title-2` (20/28) for the PageHeader title, `title-3` (16/24) for dialog and drawer titles, and `title-4` (14/20) for card titles, fieldset legends, section and column headers.
- Use `body` (14/22) for multi-line prose: descriptions, dialog body, comments. It is the same size as `ui` with a looser line height; nothing in product UI is set at 16px except the `title-3` heading. Use `small` (12/16) only for helper text and timestamps, and `small-strong` (12/16, 500) for badge, tag and count labels.

### Accent and typeface options
Tessera ships four accents and four typefaces. Both are independent of light and dark, and every combination passes WCAG AA (text 4.5:1, controls, focus rings and the selected-tab bar 3:1).

| Accent | `data-accent` | Use it when |
|---|---|---|
| Indigo (default) | `indigo` | No brand colour to follow. Distinct from every status colour. |
| Cobalt | `cobalt` | You want the classic developer-tool blue. Deeper and more saturated than `info` (sky), so the two don't read alike. |
| Teal | `teal` | You want a cool, calm accent. Kept darker than `success` green. |
| Graphite | `graphite` | You want a monochrome product: near-black in light, near-white in dark. Links stay underlined so they remain distinguishable from text. |

| Typeface | `data-font` | Text / numbers / code |
|---|---|---|
| Geist (default) | `geist` | Geist / IBM Plex Sans / Geist Mono |
| IBM Plex | `plex` | IBM Plex Sans / IBM Plex Sans / IBM Plex Mono |
| Inter | `inter` | Inter / Inter / JetBrains Mono |
| System UI | `system` | The operating system's UI and monospace fonts; nothing to download |

- Set the attributes on `<html>` (or on any container to theme just that part): `<html data-theme="dark" data-accent="teal" data-font="geist">`.
- Or call `Tessera.setTheme({ accent: 'teal', font: 'geist' })`. It sets the attributes and remembers the choice in this browser; pass `{ persist: false }` to skip that. `Tessera.getTheme()` returns the current `{ accent, font, mode }`, and `Tessera.themes` lists the options.
- The options only swap the accent tokens (`accent`, `accent-hover`, `on-accent`, `accent-subtle`, `text-accent`, `focus-ring`) and `--font-sans` / `--font-numeric` / `--font-mono`. Components never hard-code either, so everything follows. Don't hard-code an accent hex yourself or the options stop working.
- Status colours never change with the accent. One accent per product: don't mix accents on one screen.
- The Themes card (Foundations) has the switches and a live contrast check of the accent pairs; the choice carries over to the other previews.

### Space and layout
- Spacing steps: `space-2`, `space-4`, `space-6`, `space-8`, `space-12`, `space-16`, `space-24`, `space-32`, plus `space-48` and `space-64` for rare marketing-style pages. Never use values off this scale.
- **Density.** Tessera follows developer-tool density (32px default controls, 16px icons, 8/12 table cells). Inside components, gaps are 4–12 and padding is 6–16; 24 and above is only for page-level layout. When in doubt, take the smaller step.
- App frame:
  - an `AppHeader` 48px high (`header-height`) across the top
  - an optional `SideNav` on the left (`sidenav-open` 240px, or `sidenav-rail` 56px)
  - content on `bg-page` with `space-24` padding (`space-16` below 1024px)
- Page anatomy (PageHeader):
  - Breadcrumbs, then the page title with its primary action at the top-right, optional Tabs underneath
  - a FilterBar or Toolbar above lists and tables
  - then cards and sections separated by `space-16`
- Cards pad `space-16` (header `space-12` top), or `space-12` when `compact`. Dialogs and drawers pad `space-16`. Items stacked inside a board column sit `space-8` apart.
- Control heights are `control-xs` 24 (inline in table rows), `control-sm` 28 (toolbars, filter bars, side panels), `control-md` 32 (default for buttons, fields, nav items, menu items) and `control-lg` 40 (tabs; the main action on sign-in or onboarding pages).
- Icons are 16px in every default control, 14px in small ones and 20px only in `lg` buttons and empty states.

### Shape and depth
- Corner radii:
  - `radius-xs` (2px): checkboxes
  - `radius-sm` (4px): inputs, badges, menus, alerts
  - `radius-md` (6px): buttons, nav items, board columns
  - `radius-lg` (10px): cards, tables, dialogs
  - `radius-pill`: switches, avatars, counts
- Shadows are soft and neutral:
  - `shadow-sm`: the header and cards on `bg-page`
  - `shadow-md`: menus, popovers, date pickers and select lists
  - `shadow-lg`: dialogs, drawers, toasts and the command palette
- No coloured shadows, inner shadows, gradients or blur. Overlays use `scrim`.

### States
- **Focus:** a solid 2px `focus-ring` outline, offset 2px, on every interactive element. It holds 3:1 on every surface in both themes.
- **Disabled:** a `surface-muted` fill with `text-disabled` text. Never fade with opacity.
- **Loading:** a Spinner replaces the leading icon in place, and the label stays.
- **Selected:** `accent-subtle` ground with `text-accent` text.
- **Open:** an open field (select, combobox, date picker) keeps its `accent` edge while its panel is showing.
- **Hover / pressed:** `surface-hover` / `surface-active` on neutral controls, `accent-hover` on accent fills, `critical-hover` on critical fills.

### Long content
- **One-line labels** (buttons, badges, tags, tabs, nav items, breadcrumbs, tree rows, file names) never wrap: they shrink, end in "…" and show the full text as a tooltip. Buttons cap at 320px, badges and tags at 200px, tabs and nav items at 240px.
- **Running text** (field labels and help, titles, descriptions, alerts, toasts, list and table text) wraps, and long IDs, emails and URLs break anywhere instead of overflowing.
- **Crowded rows** give way in this order: actions drop under the title (PageHeader, Banner), meta and time move to the next line (Timeline, Comment), tabs and top nav scroll sideways, tables scroll inside their frame.
- **Density:** `size="sm"` on Accordion, List, Tabs and DescriptionList, and `density="compact"` on Table, for data-heavy panels.

### Motion
- Keep motion short and functional: 150ms for toggles, 200ms for drawers and menus. Nothing decorative.
- Respect reduced-motion settings.

### Imagery
- Flat colour only. No photos, illustrations or textures in product UI.
- Empty states use a 24px icon, one sentence, and the action that fills the space.

## Iconography
- Tessera's own outline set is drawn on a 24px grid with a 1.5px stroke, round caps and joins, and paints with `currentColor`. Render it with `<Icon name="search" />`, and see the Icon card for every name.
- Icon sizes:
  - 16: inside small controls and badges
  - 20: in buttons, fields and nav (the default)
  - 24: standalone
- No icon fonts, emoji or unicode glyphs as icons, and no icons from other libraries. If a glyph is missing, it gets added to the set.
- There is no logo yet. The AppHeader shows the Tessera mark (four tiles in `accent`) next to the app name in `title-4` weight.

## Components
- **Actions:** Button, IconButton, ButtonGroup, SplitButton, ToggleButton, SegmentedControl, Link, CopyButton
- **Forms:** TextField, TextArea, NumberField, PasswordField, SearchField, Select, Combobox, MultiSelect, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Slider, Calendar, DatePicker, DateRangePicker, TimePicker, FileUpload, InlineEdit, Fieldset
- **Overlays:** Menu, MenuButton, Popover, Tooltip, Dialog, ConfirmDialog, Drawer, Toast, CommandPalette
- **Feedback:** Alert, Banner, ProgressBar, Spinner, Skeleton, EmptyState
- **Navigation:** Tabs, TopNav, Breadcrumbs, Pagination, Stepper, Accordion, TreeView
- **App chrome:** AppHeader, SideNav
- **Data display:** Table, Badge, Tag, TagGroup, Avatar, AvatarGroup, Kbd, CodeInline, CodeBlock, CopyInline, DescriptionList, Stat, Timeline, Comment, List
- **Layout:** Card, Divider
- **Patterns:** PageHeader, Toolbar, TableToolbar, FilterBar, FilterPanel, KanbanColumn, KanbanCard

Mount them from `window.Tessera`. Each card's guidelines say what the consumer provides.

Choosing between look-alikes:
- **Badge or Tag:** Badge is read-only status; Tag is interactive (removable, selectable).
- **Alert, Banner or Toast:** Alert belongs to a section; Banner spans the page for system state; Toast confirms the user's own action and disappears.
- **Dialog, Drawer or Popover:** Dialog blocks the page for a focused task; Drawer shows details beside the list; Popover handles a small task anchored to its trigger.
- **Select, Combobox or RadioGroup:** RadioGroup for 2–6 visible options; Select for up to ~15; Combobox when people need to search.
- **Tabs, SegmentedControl or TopNav:** Tabs switch content within a page; SegmentedControl switches the view of the same content; TopNav moves between app sections.
- **Table, List or Kanban:** Table to compare columns; List for simple records; Kanban for status-based workflows.

## Picking a component
For people and agents alike: find the need, pick the component, then follow its card's **Do / Don't**. Every component card has *When to use*, *Use something else*, *Do* and *Don't* sections, and the same guidance is in `index.d.ts` (hover docs) and in each Figma component's description.

| Need | Use |
|---|---|
| Trigger an action | Button (one primary per view) · IconButton (icon-only, with tooltip) |
| Several related actions | MenuButton · SplitButton (one default + variations) |
| Go to another page | Link · SideNav / TopNav (app sections) · Breadcrumbs (back up) |
| Switch sections of one page | Tabs |
| Switch views of the same data | SegmentedControl |
| On/off with immediate effect | Switch (settings) · ToggleButton (view options) |
| On/off saved with a form | Checkbox · CheckboxGroup |
| Pick one of 2–6 visible options | RadioGroup |
| Pick one of ~3–15 options | Select |
| Pick one of many (searchable) | Combobox |
| Pick several of many | MultiSelect (8+) · CheckboxGroup (fewer, visible) |
| Enter text | TextField · TextArea · PasswordField · NumberField (quantities) |
| Enter a date or time | DatePicker · DateRangePicker · TimePicker · Calendar (inline) |
| Search or filter a list | SearchField · FilterBar (2–4 filters) · FilterPanel (5+) |
| Show many records to compare | Table (+ TableToolbar, Pagination) |
| Show simple records | List |
| Show a status workflow | KanbanColumn + KanbanCard |
| Show one record's details | DescriptionList inside a Card or Drawer |
| Show status / priority | Badge |
| Show user-added labels or applied filters | Tag · TagGroup |
| Show a key number | Stat |
| Show history of a record | Timeline (vertical) · Comment (messages) |
| Show progress through milestones | Timeline (horizontal) · Stepper (form flow) |
| Show progress of a task | ProgressBar · Spinner (short) · Skeleton (loading layout) |
| Tell people something happened | Toast (their action) · Alert (a section) · Banner (whole page) |
| Confirm a destructive action | ConfirmDialog |
| Focused task over the page | Dialog · Drawer (keep list in view) · Popover (small, anchored) |
| Explain an icon or truncated text | Tooltip |
| Nothing to show | EmptyState |
| Hide optional detail | Accordion |
| Hierarchy | TreeView |
| Page top | AppHeader (app) · PageHeader (page) |

## Rules for agents building with Tessera
1. **Only Tessera.** Build every screen from `window.Tessera` components (code) or the Tessera Figma library (design). Don't pull in other component libraries, icon sets or fonts.
2. **Read the card before using a component.** Pick by *When to use*; if *Use something else* names a better fit, use that instead.
3. **Tokens only.** Colours, spacing, radius, type and shadows come from tokens; never hard-code values or use off-scale spacing.
4. **One primary action per view.** Destructive actions use the critical tone and a ConfirmDialog.
5. **Write like the product.** Sentence case, verb-first buttons, plain error text that says how to fix it (see Content fundamentals).
6. **Missing pieces.** If no component fits, compose one from existing components and tokens, label it as composed, and flag it — don't invent new visual styles or add to the system without the owner's approval.
7. **Check your work.** Long text truncates or wraps as described under Long content; every interactive element is reachable by keyboard; light and dark both read correctly.
8. **Keep it dense.** Use default sizes (32px controls, 16px icons) and the smaller spacing step when unsure. Don't reach for `lg` sizes, 24px+ padding inside components, or 16px+ text outside titles; page-level layout is the only place for `space-24` and above.
