# Skeleton

Placeholder shapes while content loads (under ~2s use nothing; over that, a skeleton matching the final layout). Not for empty states.

## When to use
Placeholder for content that is loading, in the shape of the final layout.

## Use something else
Short action wait → Spinner.

## Do
- Match the real layout (lines, avatar, table rows).

## Don't
- Don't show skeletons for more than a few seconds without a message.
