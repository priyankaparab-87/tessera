# Changelog

What changed in Tessera each week, newest first, summarised per component or across the system. Small fixes are left out.

## Week of 23 Nov 2026

### DateRangePicker
- Presets now work and are based on today's date. There are more of them (Today, Yesterday, Last 7, 30 and 90 days, This and last month, This and last quarter, Year to date), and you can add your own.
- Picking a preset or dates no longer closes the calendar. The selected range and its length show at the bottom, and **Clear** and **Confirm** buttons decide what goes in the field.
- New `withTime` option adds start and end times, which default to 00:00.
- The calendar opens at the field's width, and a × in the field clears the dates.

### DatePicker
- New `withTime` option adds a time input with Clear and Confirm.
- The calendar opens at the field's width, and a × in the field clears the date.
- The calendar highlights the real today.

### Docs site
- New Changelog page: this weekly summary.

## Week of 16 Nov 2026

### Design system
- First release: 78 React components with live previews and guidelines, tokens in light and dark, four accents and four typefaces, all WCAG AA.

### Docs site
- Guides for developers and designers replace the single Get started page.
- Links to the Figma Community library and the GitHub repo.
