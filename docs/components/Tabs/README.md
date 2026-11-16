# Tabs

Switches between views of the same object. The selected tab gets `text-accent` and a 3px `accent` bar.

- Labels are nouns, one or two words. `count` shows how many items a tab holds.
- Keep tabs to one row; use SideNav for app-level sections.
- ← → Home End move between tabs (disabled tabs are skipped). Labels over 240px are cut with an ellipsis; extra tabs scroll sideways.
- `size: 'sm'` (32px) for tabs inside cards and panels.

## When to use
Switch between sections of the same page or record: Orders / Notes / Cases.

## Use something else
App-level sections → SideNav or TopNav. Views of the same data → SegmentedControl. Steps in order → Stepper.

## Do
- Keep labels to one or two nouns; add `count` when helpful.
- Use `size="sm"` inside cards and panels.

## Don't
- Don't wrap tabs onto two rows.
- Don't use tabs for sequential steps.
