# Button

Triggers an action. Secondary is the default; use **primary** once per view for the main thing the page is for (top-right of the page title, or bottom-right of a card or dialog).

- Labels are a verb in sentence case: “Create case”, “Export report”, never “OK” or “Submit”.
- Destructive actions use `tone="critical"` with a specific verb (“Delete case”) and usually confirm first.
- Sizes: `sm` (28px) in toolbars, filter bars and tables, `md` (32px) default, `lg` (40px) only for the main action on sparse pages such as sign-in or onboarding. Icons are 16px (20px in `lg`).
- `loading` swaps the leading icon for a Spinner and blocks clicks; keep the label.
- Provide: `children` (label), optional `iconStart`/`iconEnd` icon names, `onClick`.
- Labels never wrap: a long label is cut with an ellipsis and the full text goes in the tooltip. `block` makes the button fill its container (narrow panels, mobile footers).

## When to use
Trigger an action: submit, save, create, open a dialog.

## Use something else
Navigating to another page → Link. Icon-only action → IconButton. On/off state → ToggleButton or Switch. Several related actions behind one control → MenuButton or SplitButton.

## Do
- Start the label with a verb that names the result: “Export report”, “Delete case”.
- Use one `primary` button per view, for the main thing the page or dialog is for.
- Put the primary button last (right) in a group; Cancel sits to its left.
- Use `tone="critical"` for destructive actions and confirm with ConfirmDialog first.
- Use `loading` while the action runs; keep the label.

## Don't
- Don't use generic labels: “OK”, “Submit”, “Click here”, “Yes”.
- Don't put two primary buttons side by side.
- Don't use a button to navigate between pages.
- Don't disable a button without saying why nearby (helper text or tooltip).
- Don't add an icon to every button; use icons only when they speed up scanning.
