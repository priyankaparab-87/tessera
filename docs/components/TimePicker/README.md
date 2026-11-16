# TimePicker

Pick a time from a list at `step` minutes between `startHour` and `endHour`. 24-hour format.
- Keyboard on the button: ↓ opens and moves, Enter picks, Esc closes.

## When to use
A time of day in a form: pickup slot, reminder.

## Use something else
Durations → NumberField with a unit.

## Do
- Set `step` to the real granularity (15 or 30 minutes).
- Limit `startHour`/`endHour` to valid hours.

## Don't
- Don't show 24 hours of 1-minute steps.
