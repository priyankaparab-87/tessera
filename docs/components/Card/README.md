# Card

A `surface` container on `bg-page` with `border`, `radius-lg` and `shadow-sm`.

- Provide `title` (`title-4` look) and optional `subtitle`, `actions` (top-right) and `footer` (actions bottom-right).
- `padding="compact"` (12px) for dense grids and items inside panels; default padding is 16px.
- `flat` drops the shadow when cards sit inside another surface (for example a board column).
- Don't nest a shadowed card inside another card.

## When to use
Group related content on a page into a bordered surface with an optional title and actions.

## Use something else
Whole-page sections → PageHeader + plain layout. Clickable record in a board → KanbanCard.

## Do
- Use `padding="compact"` for dense grids; `flat` inside another surface.

## Don't
- Don't nest shadowed cards.
- Don't make the whole card clickable and also put buttons in it.
