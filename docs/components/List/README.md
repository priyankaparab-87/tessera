# List

Rows of simple records (people, files, settings). Use Table when users compare columns.

- `size: 'sm'` for dense lists (4px × 8px padding, 24px avatar). Default rows are 6px × 12px with a 32px avatar.
- `selectable` makes it a listbox: click or ↑ ↓ Home End, Enter/Space selects and calls `onSelect(id)`. Pass `label`.
- Titles and descriptions wrap; `meta` stays on one line.

## When to use
Simple records with a title, description and one action: people, files, settings.

## Use something else
Comparing values across columns → Table. Status workflow → Kanban.

## Do
- Use `selectable` with `onSelect` for master–detail layouts.
- Use `size="sm"` in side panels.

## Don't
- Don't put more than one action per row; use a MenuButton.
