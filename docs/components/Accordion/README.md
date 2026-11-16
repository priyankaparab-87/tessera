# Accordion

Stacked sections that expand to show detail. Use for secondary or optional content; don't hide required fields inside.

- `size: 'sm'` for dense panels (32px rows, 8px padding); default rows are 40px.
- `variant`: `default` (one bordered box), `flush` (no box, for side panels and FilterPanel), `separated` (each item its own card).
- Each item takes `title`, optional `subtitle` (one muted line), `icon`, `meta` (a string, or any node such as a Badge), `actions` (IconButtons outside the toggle), `disabled` and `content`.
- Long titles wrap; a string `meta` is cut with an ellipsis at 40% of the row.
- Controlled with `open` + `onOpenChange`, or uncontrolled with `defaultOpen`. `multiple={false}` keeps one open.

## When to use
Hide secondary or optional detail under headings people expand when needed: FAQs, filter groups, line-item details.

## Use something else
Content everyone needs → show it. Switching between peer views → Tabs.

## Do
- Use `size="sm"` and `variant="flush"` in dense side panels.
- Show a `meta` count or badge so people know what's inside.
- Put item actions in `actions`, not inside the title.

## Don't
- Don't hide required form fields inside a collapsed item.
- Don't nest accordions.
