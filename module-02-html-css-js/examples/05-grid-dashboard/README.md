# Example 5: Grid Dashboard

## Goal

Build a dashboard layout using CSS Grid rows and columns.

## Concepts used

- [Lesson 5: CSS Grid](../../lessons/05-css-grid.md)

## Run it

```bash
cd module-02-html-css-js/examples/05-grid-dashboard
python3 -m http.server 8004
```

Then open http://localhost:8004.

## Expected output

The browser shows a dashboard with a sidebar, main panel, and small stats cards aligned in a grid.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-80 | Creates the dashboard structure |
| `styles.css` | 1-160 | Uses Grid to set the columns, rows, and gaps |

### Numbered steps

1. The dashboard container uses `display: grid`.
2. Columns are defined by `grid-template-columns`.
3. `grid-area` or grid-column rules place each section in the correct slot.
4. `gap` creates consistent space between panels.

## 3 experiments

1. Change the grid template from `220px 1fr 220px` to `1fr 1fr 1fr` and compare the layout.
2. Add a new panel and place it in the main area by setting a `grid-column` or `grid-area`.
3. Adjust the gap and notice how the layout opens up or compresses.

## Troubleshooting

- Panels overlap  
  Review the grid column and row settings for each panel.
- Content appears in a single column  
  Confirm the grid container and template columns are set correctly.
- Layout looks uneven  
  Add `gap` or inspect the grid template values.

## Notes

Grid is a good choice for dashboards because it manages both rows and columns clearly.
