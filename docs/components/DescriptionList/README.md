# DescriptionList

Label–value pairs for record details. `inline` (labels left) in panels and drawers; `stacked` in dense cards.

- `size: 'sm'` (12/16 type) inside cards, Kanban cards and compact accordions. Long values wrap.

## When to use
Read-only key–value details of a record: Order ID, Customer, Status.

## Use something else
Editable values → form fields or InlineEdit. Comparing many records → Table.

## Do
- Use `inline` in wide panels, `stacked` with `columns={2}` in narrow ones, `size="sm"` in cards.
- Values can be any component (Badge, Link, CopyInline).

## Don't
- Don't use it for more than ~12 pairs; split into Cards or Fieldset-like sections.
