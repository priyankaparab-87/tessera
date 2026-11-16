# Menu

A list of actions. Opened by MenuButton, SplitButton or a row action.

- Group with `section` titles and `divider`s; destructive items last with `tone: 'critical'`.
- Show shortcuts with Kbd. Keep labels to verbs: “Assign to me”.
- Width 200–320px; long labels wrap, unbroken IDs break. If any item has `checked`, every item gets a check column so labels line up; items without an icon keep the icon space when others have one.
- Keyboard: ↑ ↓ move (disabled items skipped), Home/End jump, typing a letter jumps to the next item starting with it, Esc closes and returns focus to the button. `description` adds a muted second line; `submenu` adds a chevron.

## When to use
A list of actions on an object, opened from MenuButton, SplitButton or a row's ⋯.

## Use something else
Choosing a form value → Select. Navigation → SideNav, TopNav or Tabs.

## Do
- Start items with verbs; keep them short.
- Group with `section` and `divider`; put destructive items last with `tone: 'critical'`.
- Show shortcuts with `shortcut` when they exist.

## Don't
- Don't nest submenus more than one level.
- Don't put more than ~10 items; split into sections or a dialog.
