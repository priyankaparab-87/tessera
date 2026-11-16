# Spinner

An indeterminate loading indicator that inherits `currentColor`.

- Inline beside a short label for loads under a few seconds; Buttons use it through `loading`.
- For whole regions, keep the layout and put the Spinner where content will appear.

## When to use
A short wait (under ~3s) in a small area: inside a button, a panel refresh.

## Use something else
Loading layout content → Skeleton. Long task → ProgressBar.

## Do
- Give it a `label` for screen readers.

## Don't
- Don't cover a whole page with a spinner.
