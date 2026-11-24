# DatePicker

Pick one date, or a date and time with `withTime`. The field shows `2 Sep 2026` (or `2 Sep 2026, 14:30`); the calendar opens below at the field's width.

- The × in the field clears the value; Delete or Backspace on the focused field does the same. `clearable={false}` hides it for required fields.
- `withTime` adds a Time input under the calendar and **Clear** / **Confirm** buttons: the value changes only on Confirm. Type `9`, `930`, `9:30` or `9:30 pm`; ↑ ↓ step by `timeStep` minutes (default 15). `hourCycle={12}` shows AM/PM; the default is 24-hour. A new date takes `defaultTime` (default `09:00`).
- Without `withTime`, picking a day sets it and closes. Esc closes and returns focus to the field.

## When to use
One date in a form: due date, delivery date. With `withTime`: one moment, such as a publish time or appointment.

## Use something else
A start and end → DateRangePicker. A time of day on its own → TimePicker.

## Do
- Show dates as “2 Sep 2026”.
- Default to today or the most likely date when it helps.
- Use `withTime` only when the time matters; most dates don't need one.

## Don't
- Don't ask people to type dates in an ambiguous format.
- Don't pair a DatePicker with a separate TimePicker for one moment; use `withTime`.
