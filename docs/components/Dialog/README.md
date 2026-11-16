# Dialog

Modal window for a focused task that blocks the page. Sizes: `sm` 400, `md` 560, `lg` 800.

- Title is the task (“Edit case details”); primary action bottom-right, named for the result.
- Esc and the close button cancel. Don't stack dialogs.

## When to use
A focused task or decision that blocks the page until done: edit details, create a record.

## Use something else
Keep the list in view while working → Drawer. Simple yes/no → ConfirmDialog. Small anchored task → Popover.

## Do
- Title states the task (“Edit case details”).
- Footer: Cancel then the primary action named after the result.
- Pick `size` by content: sm for short forms, lg for tables.

## Don't
- Don't open a dialog from a dialog.
- Don't use dialogs for messages that could be inline Alerts.
