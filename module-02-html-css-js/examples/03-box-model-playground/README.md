# Example 3: Box Model Playground

## Goal

Show how `padding`, `border`, and `margin` change the visible size and spacing of a box.

## Concepts used

- [Lesson 3: CSS selectors and the box model](../../lessons/03-css-selectors-and-box-model.md)

## Run it

```bash
cd module-02-html-css-js/examples/03-box-model-playground
python3 -m http.server 8002
```

Then open http://localhost:8002.

## Expected output

A card sits in the middle of the page with a visible blue border, inner spacing, and a margin around it. Changing the values in CSS changes the card's size and placement.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-40 | Creates a card with a heading and paragraph |
| `styles.css` | 1-80 | Sets the border, padding, margin, and layout |

### Numbered steps

1. The card is a block element with a visible border.
2. `padding` adds space inside the card.
3. `border` draws the edge of the card.
4. `margin` adds space outside the card and moves it away from nearby elements.

## 3 experiments

1. Increase `padding` from `24px` to `48px` and notice the text moves away from the border.
2. Increase `border` width from `4px` to `10px` and watch the card expand.
3. Increase `margin` and see how the card moves away from surrounding elements.

## Troubleshooting

- The card does not look spaced correctly  
  Check whether the values are set on the same selector.
- The page looks cramped  
  Add margin or padding to the surrounding box.
- The border is not visible  
  Confirm the border width and border color are both set.

## Notes

This example is a good visual explanation of the box model because all four layers are easy to inspect in the browser.
