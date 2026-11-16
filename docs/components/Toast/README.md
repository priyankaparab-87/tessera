# Toast

Brief confirmation that floats bottom-left and disappears after ~5s. Use for results of the user's own actions; offer Undo where possible. Errors that need action stay until dismissed.

## When to use
Confirm the result of the user's own action, briefly, with an optional Undo.

## Use something else
System state that persists → Banner. A problem in a section → Alert. Needs a decision → Dialog.

## Do
- Keep the title to a few words (“Case closed”).
- Offer one short action (Undo, View).

## Don't
- Don't use toasts for errors people must act on.
- Don't show more than one toast at a time.
