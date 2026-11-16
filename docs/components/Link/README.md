# Link

Navigates somewhere. Always underlined so it is never told apart by colour alone.

- `text-accent` by default; `subtle` for low-emphasis links in dense metadata.
- `external` opens a new tab and adds an external-link icon.
- Use a Button, not a Link, for actions that change data.

## When to use
Navigate to another page or record, or open an external resource.

## Use something else
Performing an action → Button (or Button `variant="tertiary"`).

## Do
- Make the link text describe the destination: “View invoice INV-2207”.
- Use `external` for links that leave the app; the icon tells people a new tab opens.
- Use `subtle` inside dense tables only when many links sit together.

## Don't
- Don't write “click here” or “learn more” without context.
- Don't style a link as a button or a button as a link.
