# Select

Pick one option from a short list (up to ~15). Use SearchField-style filtering for longer lists.

- The placeholder names the choice (“Filter by priority”); options are sentence case.
- Same label, help and error rules as TextField.

## When to use
Pick one option from a known list of about 3–15 items.

## Use something else
2–6 options that should be visible → RadioGroup. Long list or needs typing → Combobox. Several values → MultiSelect or CheckboxGroup.

## Do
- Order options logically (frequency, alphabetical or natural order).
- Use a `placeholder` like “Select a status” when there is no default.

## Don't
- Don't use it for yes/no; use Switch or Checkbox.
- Don't hide a critical choice inside a Select if comparing options matters.
