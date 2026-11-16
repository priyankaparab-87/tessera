# Alert

An inline message about the page or a section. Tones: `info`, `success`, `warning`, `critical`, each with its own icon.

- Title states what happened; body says what to do next. Plain words, no blame.
- `critical` is announced immediately (role alert); others are polite.
- Use `dismissible` only for messages that don't need to stay.

## When to use
A message about a section or form: validation summary, warning about this record.

## Use something else
Whole page or app → Banner. Result of the user's action → Toast. Field-level error → the field's `error`.

## Do
- Title says what happened; body says what to do next.
- Match `tone` to severity.

## Don't
- Don't stack several alerts; combine them.
- Don't use critical tone for information.
