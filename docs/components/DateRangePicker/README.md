# DateRangePicker

Pick a start and end date, with quick presets. First click sets the start, second the end; the popover opens below at the field's width and stays open until you confirm.

- Presets work relative to today: `today`, `yesterday`, `last7`, `last30`, `last90`, `thisMonth`, `lastMonth`, `thisQuarter`, `lastQuarter`, `thisYear`. The default set is Today, Last 7 days, Last 30 days, This month, Last month and This quarter. “Last 7 days” includes today. Pass your own as `{ label, value: [start, end] }` or `{ label, value: (today) => [start, end] }`, or `presets={false}` for none. The preset that matches the current range is highlighted. Picking a preset only selects it: the calendar jumps to it and the footer shows the range and its length (for example “26 Oct 2026 – 24 Nov 2026 · 30 days”).
- The × in the field clears both dates; Delete or Backspace on the focused field does the same. `clearable={false}` hides it.
- Every range picker has a footer with **Clear** and **Confirm**. The field changes only on Confirm. Clear empties the selection and keeps the calendar open; Confirm on an empty selection clears the field. Esc or a click outside closes without changing the field.
- `withTime` adds Start time and End time inputs under the calendar. Both default to `00:00` (`defaultStartTime`, `defaultEndTime`); change them only when the time matters. `hourCycle={12}` shows AM/PM.

## When to use
Start and end dates: reporting periods, filters, bookings. With `withTime`: maintenance windows, log searches, shifts.

## Use something else
One date → DatePicker.

## Do
- Offer presets for common ranges (Last 7 days, This quarter).
- Show the selected range in the footer before people confirm, as travel booking flows do.

## Don't
- Don't use two separate DatePickers for one range.
- Don't offer more than about eight presets.
