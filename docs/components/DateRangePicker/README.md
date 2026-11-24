# DateRangePicker

Pick a start and end date, with quick presets. First click sets the start, second the end; the popover opens below at the field's width.

- Presets work relative to today: `today`, `yesterday`, `last7`, `last30`, `last90`, `thisMonth`, `lastMonth`, `thisQuarter`, `lastQuarter`, `thisYear`. The default set is Today, Last 7 days, Last 30 days, This month, Last month and This quarter. “Last 7 days” includes today. Pass your own as `{ label, value: [start, end] }` or `{ label, value: (today) => [start, end] }`, or `presets={false}` for none. The preset that matches the current range is highlighted.
- The × in the field clears both dates; Delete or Backspace on the focused field does the same. `clearable={false}` hides it.
- `withTime` adds Start time and End time inputs under the calendar and Cancel / Apply buttons: the value changes only on Apply. New ranges start at `defaultStartTime` (`00:00`) and end at `defaultEndTime` (`23:59`), so whole days are included. `hourCycle={12}` shows AM/PM.
- Without `withTime`, a preset or the second click sets the range and closes. Esc closes and returns focus to the field.

## When to use
Start and end dates: reporting periods, filters, bookings. With `withTime`: maintenance windows, log searches, shifts.

## Use something else
One date → DatePicker.

## Do
- Offer presets for common ranges (Last 7 days, This quarter).
- Keep the default 00:00–23:59 times for filters so the end day is included.

## Don't
- Don't use two separate DatePickers for one range.
- Don't offer more than about eight presets.
