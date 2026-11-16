# MultiSelect

Pick several options; selections show as removable Tags inside the field.
- Keyboard: ↓ ↑ move, Enter toggles, Backspace in an empty input removes the last tag. Long tags are cut to the field width.

## When to use
Pick several options from a list of 8+ items: tags, channels, assignees.

## Use something else
Fewer than ~8 options → CheckboxGroup (all visible). One value → Select or Combobox.

## Do
- Show chosen values as removable tags.
- Let Backspace remove the last tag.

## Don't
- Don't use it when every option should stay visible for comparison.
