# Icon

Outline icons on a 24px grid with a 1.5px stroke and round caps; they paint with `currentColor`, so set the colour on the parent.

- Sizes: 16 inside small controls and badges, 20 in buttons, fields and navigation (the default), 24 for standalone icons.
- Colour: inherit `text-subtle` for neutral icons; status icons take `info`, `success`, `warning` or `critical` and always sit beside a word.
- Pass `label` only when the icon stands alone and means something; decorative icons stay hidden from screen readers.
- Use only names from `Icon.names`. A missing glyph renders `placeholder`: ask for the icon to be added rather than drawing one inline.

## When to use
Reinforce meaning next to text, or stand alone inside an IconButton.

## Use something else
Status → Badge with an icon. Decoration → leave it out.

## Do
- Use 16 in default controls, 14 in small ones, 20 only in large buttons and empty states.
- Pass `label` when the icon carries meaning on its own.

## Don't
- Don't use icons from other libraries, emoji or unicode glyphs.
- Don't recolour icons outside the token palette.
