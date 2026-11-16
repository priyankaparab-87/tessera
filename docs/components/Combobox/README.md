# Combobox

A searchable single select for long lists (people, products, countries).

- Typing filters; the selected option shows a check.
- Use Select for under ~15 options that don't need search.
- Keyboard: ↓ opens and moves, ↑ moves, Enter picks, Esc closes. The input points at the active option (`aria-activedescendant`).

## When to use
Pick one option from a long list (15+) by typing: customers, countries, assignees.

## Use something else
Short list → Select. Several values → MultiSelect.

## Do
- Match anywhere in the label, not only the start.
- Show an empty state (“No matches”) when nothing fits.

## Don't
- Don't allow free text unless the field really accepts new values.
