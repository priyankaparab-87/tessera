# ButtonGroup

Groups related buttons. Default spacing is `space-8`; `attached` joins them into one control.

- Order: least to most important, so the primary action sits on the right.
- Use attached groups for a few equal-weight actions; use SegmentedControl when exactly one option is selected.

## When to use
Keep two or more related buttons together with consistent spacing (dialog footers, form actions).

## Use something else
Exactly one option is selected at a time → SegmentedControl. Many actions → MenuButton.

## Do
- Order least to most important; the primary action is on the right.
- Use `attached` only for a few equal-weight actions that act on the same object.

## Don't
- Don't mix sizes within a group.
- Don't use an attached group to show selection; that is SegmentedControl.
