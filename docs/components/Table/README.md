# Table

A data table for scanning and comparing records.

- `columns`: key, label, optional `render`, `align`, `width`, `sortable` (+ `sortValue`). Right-align numbers and dates you compare.
- `selectable` adds a checkbox column; pair with TableToolbar for bulk actions. `rowActions` adds a ⋯ menu column.
- Header on `surface-muted`; rows divided by `border-subtle`; hover `surface-hover`; selected `accent-subtle`.
- `footer` holds Pagination. `density="compact"` for long lists. Give `emptyText` that says why it's empty.
- Long text wraps (IDs and URLs break anywhere). Per column: `truncate: true` keeps one line with an ellipsis (set `width`), `nowrap: true` for codes and dates. Right-aligned columns never wrap and set their figures in the numeric font (IBM Plex Sans by default, tabular digits); `numeric: true` does the same for any other column, `numeric: false` opts out. Row checkboxes are labelled "Select row …" from the first column.

## When to use
Compare many records across columns; sort, select and act in bulk.

## Use something else
Few fields per record → List. Status workflow → Kanban. One record's details → DescriptionList.

## Do
- Right-align numbers and money; keep IDs `nowrap`.
- Use `selectable` with TableToolbar for bulk actions; `density="compact"` for long lists.
- Give `emptyText` that says why it's empty.

## Don't
- Don't put more than one or two actions in a row; use the ⋯ row action.
- Don't nest tables.
