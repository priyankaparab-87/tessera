# InlineEdit

Edit a single value in place, on read-heavy pages. Enter saves, Esc cancels. Use a form for several fields at once.

## When to use
Edit one value in place on a detail page: title, name, reference.

## Use something else
Several fields at once → a Dialog or Drawer with a form.

## Do
- Save on Enter, cancel on Esc.
- Pass `label` so the edit button says what it edits.

## Don't
- Don't use it for values that need validation across fields.
