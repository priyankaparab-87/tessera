# Slider

Choose a value from a continuous range when precision matters less than feel. Show the value beside the label; pair with NumberField when exact input is needed.

## When to use
Choose an approximate value in a range where relative position matters: max price, volume.

## Use something else
Exact values → NumberField.

## Do
- Show the current value (`showValue`) with its `unit`.
- Pair with a NumberField when precision matters.

## Don't
- Don't use it for ranges with more than ~100 meaningful steps.
