# TextField

Single-line text input with label, help and error text.

- Always give a visible `label`; mark required fields with `required` (adds *).
- `description` explains format or consequence; `error` replaces it with a short instruction (“Enter a value up to 100.”).
- Read-only values use `readOnly`, not `disabled`, so they stay selectable.

## When to use
Single-line free text: names, IDs, emails, short answers.

## Use something else
Multiple lines → TextArea. Numbers with steps → NumberField. Choose from a known list → Select or Combobox. Search a list → SearchField. Secret → PasswordField.

## Do
- Always give a visible `label`; placeholders are examples, not labels.
- Put format hints in `description` (“Format: ORD-12345”).
- Write `error` as one instruction to fix it (“Enter an email like name@company.com”).
- Match the field width to the expected content.

## Don't
- Don't use placeholder text as the only label.
- Don't validate on every keystroke; validate on blur or submit.
- Don't mark optional fields; mark required ones with `required`.
