# NumberField

Numeric input with stepper buttons. Values are tabular figures.

- Set `min`, `max` and `step`; the buttons disable at the limits.
- Put units in `prefix`/`suffix`, never inside the label.

## When to use
Whole or decimal numbers that people adjust in small steps: quantity, percentage, days.

## Use something else
IDs, phone numbers, card numbers → TextField (they're not quantities). A rough value in a range → Slider.

## Do
- Set `min`, `max` and `step`.
- Put units in `prefix`/`suffix` (EUR, %, days), not in the label.

## Don't
- Don't use it for values that are never incremented (postal codes, IDs).
