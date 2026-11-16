# Calendar

Month grid used by DatePicker and DateRangePicker. Weeks start on Monday; today has an outline; selected days use `accent`.

- One Tab stop: the selected (or today's) day. ← → ↑ ↓ move by day and week, PageUp/PageDown by month, Home/End to the week's edges. Days are announced with the full date.

## When to use
Inline month view for picking dates where the calendar should stay visible (scheduling panels).

## Use something else
A date in a form → DatePicker. A range → DateRangePicker.

## Do
- Highlight today; disable dates that can't be chosen.

## Don't
- Don't use it as a read-only events calendar; it's an input.
