# Stat

A KPI tile: label, big number, change. Colour the change by whether it's good (`positive`), not by direction.

## When to use
A single key metric with an optional trend: open orders, revenue, SLA.

## Use something else
Progress toward a goal → ProgressBar. Many numbers to compare → Table.

## Do
- Show the period the delta compares to (“vs last week”).
- Set `positive={false}` when going up is bad (refunds, errors).

## Don't
- Don't show more than 4–6 stats in a row.
