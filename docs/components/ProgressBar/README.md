# ProgressBar

Shows progress of a task or how full something is. Use `indeterminate` when duration is unknown; tones only when the value itself is a warning.

## When to use
Show progress of a task with a known end: upload, import, setup completion.

## Use something else
Unknown duration and short → Spinner. Loading page content → Skeleton.

## Do
- Label what is progressing; show the percentage.
- Use `indeterminate` only while the size is unknown.

## Don't
- Don't use it as a static meter of a quantity; use Stat.
