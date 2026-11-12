# Example 4: Flexbox Layouts

## Goal

Show how Flexbox can build a navbar, a card row, and a centered content area.

## Concepts used

- [Lesson 4: Flexbox](../../lessons/04-flexbox.md)

## Run it

```bash
cd module-02-html-css-js/examples/04-flexbox-layouts
python3 -m http.server 8003
```

Then open http://localhost:8003.

## Expected output

The page should show a navbar across the top, a row of cards beneath it, and centered text or content in the middle.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-90 | Adds the layout elements |
| `styles.css` | 1-150 | Uses flex properties to align and space items |

### Numbered steps

1. `.navbar` uses `display: flex` and `justify-content: space-between`.
2. `.card-row` uses `display: flex` and `flex-wrap: wrap`.
3. `.centered-panel` uses `display: flex` with `align-items: center` and `justify-content: center`.
4. The page demonstrates clean alignment without lots of fragile margins.

## 3 experiments

1. Change `justify-content` from `space-between` to `center` and compare the nav layout.
2. Set `flex-wrap: nowrap` to see how cards overflow when the screen becomes narrow.
3. Change `gap` to a larger number and notice the spacing between cards.

## Troubleshooting

- Items are not aligned as expected  
  Check the parent container has `display: flex`.
- Cards are not wrapping  
  Confirm `flex-wrap: wrap` is applied to the card container.
- Navbar feels cramped  
  Increase `gap` or add more padding to the nav container.

## Notes

Flexbox is ideal when a layout is mostly one-dimensional, such as a navbar or a row of cards.
