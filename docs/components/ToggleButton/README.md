# ToggleButton

A button that stays on or off (`aria-pressed`). Pressed uses `accent-subtle` with an `accent` edge.

- Use for view options and personal states (Starred, Watching). For settings that persist, use Switch.
- Icon-only toggles need a `label`.

## When to use
Switch a view option on or off right away: bold, show archived, pin, favourite.

## Use something else
A setting saved with a form → Checkbox. A system setting → Switch. Pick one of several views → SegmentedControl.

## Do
- Label the thing being toggled, not the action (“Archived”, not “Show archived”).
- Give icon-only toggles a `label` for the tooltip.

## Don't
- Don't use it for actions that fire once; that's a Button.
- Don't group toggles that are mutually exclusive; use SegmentedControl.
