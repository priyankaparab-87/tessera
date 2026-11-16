# IconButton

A square button with one icon, for compact or repeated actions (row menus, close, refresh).

- `label` is required: it becomes the accessible name and the tooltip.
- Tertiary is the default; use secondary when it sits beside secondary buttons.
- Prefer a labelled Button when there is room and the action is not universally recognised.

## When to use
A compact, frequent action where the icon is universally understood: close, more, edit, delete in a row.

## Use something else
The action needs words to be understood → Button with a label. Toggles a state → ToggleButton (icon only).

## Do
- Always pass `label`; it becomes the tooltip and the accessible name.
- Use `tertiary` in tables, toolbars and card headers; `secondary` when it must stand out.
- Use the Critical variant (Figma) / `tone="critical"` for delete icons.

## Don't
- Don't invent meanings for icons; if you have to explain it, use a labelled Button.
- Don't use `primary` icon buttons except a single floating create action.
- Don't put more than 4 icon buttons in a row; move the rest into a MenuButton (⋯).
