# Example 6: Responsive Cards

## Goal

Create a mobile-first card layout that changes as the viewport gets larger.

## Concepts used

- [Lesson 6: Responsive design](../../lessons/06-responsive-design.md)

## Run it

```bash
cd module-02-html-css-js/examples/06-responsive-cards
python3 -m http.server 8005
```

Then open http://localhost:8005.

## Expected output

On a phone-sized viewport, the cards stack in one column. On a wider screen, the cards adapt to two or more columns.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-90 | Creates card content |
| `styles.css` | 1-160 | Applies mobile-first styles and media queries |

### Numbered steps

1. The base CSS sets one column for small screens.
2. `@media (min-width: 700px)` changes the layout to multiple columns.
3. `grid-template-columns` decides how many columns appear at each width.
4. The layout becomes more spacious as the screen grows.

## 3 experiments

1. Open the browser in DevTools device mode and switch between mobile and tablet sizes.
2. Change the media query width from `700px` to `500px` and compare the layout shift.
3. Increase the number of cards and notice how the layout responds.

## Troubleshooting

- Layout never changes  
  Check that the media query is written correctly and the width condition is valid.
- Cards are too narrow  
  Set a `minmax` value or adjust the `grid-template-columns` rule.
- Page looks zoomed on mobile  
  Remember to include the viewport meta tag.

## Notes

This example is a classic mobile-first design pattern: start simple, then add more columns as space becomes available.
