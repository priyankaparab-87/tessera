# SegmentedControl

Switches between 2–5 mutually exclusive views or modes of the same content.

- Use for view switches (List / Board) and short ranges (7d / 30d). Use Tabs to move between different content.
- Labels are one word; icons optional.

## When to use
Switch between 2–5 views of the same content: List / Board / Calendar, Day / Week / Month.

## Use something else
Switching different content or pages → Tabs. Choosing a form value → RadioGroup. More than 5 options → Select.

## Do
- Keep labels to one or two words and equal in importance.
- Use `iconOnly` only with well-known icons, and pass labels for tooltips.

## Don't
- Don't use it for actions; every segment is a state.
- Don't put it in a form as an input; use RadioGroup.
