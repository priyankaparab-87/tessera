# MenuButton

A button that opens a Menu. Labelled for grouped actions (“Export”), icon-only (⋮) for row and card actions.

- The trigger announces `aria-haspopup="menu"` and `aria-expanded`. Click, Enter, Space or ↓ opens the menu and focuses its first item; choosing an item or pressing Esc closes it and puts focus back on the button. SplitButton's chevron works the same way.

## When to use
A button that opens a Menu of related actions (Export ▾, ⋯ more actions).

## Use something else
One main action plus variations → SplitButton. Two or three visible actions → separate Buttons.

## Do
- Use an icon-only ⋯ trigger in rows and cards, a labelled trigger in toolbars.

## Don't
- Don't hide the page's primary action inside a MenuButton.
