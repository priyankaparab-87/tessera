# TextArea

Multi-line text. Same label, help and error rules as TextField.

- Set `rows` to the expected length; it resizes vertically.
- Use `maxLength` to show a live count beside the label.

## When to use
Multi-line text: notes, descriptions, messages.

## Use something else
One line → TextField. Rich formatting → not covered by Tessera; ask before adding.

## Do
- Set `rows` to the expected length (4 by default).
- Use `maxLength` when there is a hard limit; the counter appears automatically.

## Don't
- Don't use it for structured data that could be separate fields.
