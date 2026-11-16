# Timeline

Activity history or progress through milestones.

- **Vertical** (default): activity feeds, newest first. Each entry: who did what, when; optional `body` detail.
- **Horizontal** (`orientation="horizontal"`): milestones in order, oldest first — order and shipment progress, approval chains. Each step is at least 160px wide; extra steps scroll sideways. Keep titles to two or three words; put dates and ETAs in `time`.
- Mark the step you're on with `current`, future steps with `upcoming` (hollow marker, muted title, dashed connector). For a guided form flow use Stepper instead.
- `size="sm"` for compact feeds in side panels. Pass `label` so screen readers can tell timelines apart.

## When to use
Vertical: activity history of a record, newest first. Horizontal: progress through known milestones (order placed → delivered).

## Use something else
A form flow people complete → Stepper. Comments with replies → Comment.

## Do
- Vertical: say who did what and when.
- Horizontal: mark `current` and `upcoming` steps; keep titles to 2–3 words.

## Don't
- Don't mix activity events and milestones in one timeline.
