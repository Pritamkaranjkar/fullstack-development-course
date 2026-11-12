Module 2: HTML, CSS, and JavaScript | Lesson 3 of 10 | 20 minutes | Prerequisites: [Lesson 2](02-html-forms-tables-media.md)

## Big idea

CSS controls the look of HTML. Selectors choose which elements to style, and the box model explains how space is added around each element.

A task manager page uses CSS to make buttons look clickable, cards look separate, and spaces feel balanced. Without CSS, the page is plain and hard to use.

## Concepts

A selector is a pattern that tells CSS which HTML elements to style.

- Element selector: `p {}` selects all paragraphs.
- Class selector: `.task-card {}` selects all elements with that class.
- ID selector: `#task-form {}` selects one unique element.
- Descendant selector: `.card p {}` selects paragraphs inside a card.

The box model describes each element as a rectangular box with four layers:

- content: the actual text or image inside the box
- padding: space inside the box, between content and border
- border: the edge around the box
- margin: space outside the box, between one box and the next

CSS variables let you save a value once and reuse it. A variable starts with `--`, such as `--primary-color`.

Real-world analogy: think of each HTML element like a box on a shelf. The content is the item inside, padding is the tissue paper, border is the outer wrapping, and margin is the gap between boxes.

## Diagram

```text
+--------------------------------------+
| margin                               |
|  +-------------------------------+   |
|  | border                       |   |
|  |  +-----------------------+  |   |
|  |  | padding             |  |   |
|  |  | +---------------+ |  |   |
|  |  | | content       | |  |   |
|  |  | +---------------+ |  |   |
|  |  +-----------------------+  |   |
|  +-------------------------------+   |
+--------------------------------------+
```

## Code

```css
:root {
  --primary-color: #2563eb;
  --surface-color: #f8fafc;
  --text-color: #0f172a;
}

.task-card {
  background: var(--surface-color);
  border: 1px solid #dbeafe;
  padding: 16px;
  margin: 12px 0;
  color: var(--text-color);
}

#task-form {
  border-radius: 12px;
}

button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 16px;
}
```

## Try it

- Create a small HTML card and apply a class.
- Change `padding`, `border`, and `margin` values one at a time.
- Use DevTools to inspect the box and watch the layout change.
- Add a CSS variable and reuse it in multiple rules.

## Check yourself

1. What does a selector do?  
   <details>
   <summary>Answer</summary>
   A selector chooses which elements should receive a CSS rule.
   </details>

2. What is the box model?  
   <details>
   <summary>Answer</summary>
   The box model is the structure of content, padding, border, and margin around an element.
   </details>

3. Why use CSS variables?  
   <details>
   <summary>Answer</summary>
   CSS variables keep repeated design values in one place, so they are easier to update.
   </details>

## Common mistakes

- Using the wrong selector and styling nothing.
- Forgetting that margin adds space outside the box.
- Mixing values without checking why the layout shifts.

## Next lesson

[Lesson 4: Flexbox](04-flexbox.md)

<details>
<summary>Instructor notes</summary>

Talking points:

- Open DevTools and highlight an element to show each box model layer.
- Demonstrate that `padding` grows the inside of the box, while `margin` pushes sibling elements away.
- Show a `:root` block and explain design tokens.

Live demo steps:

1. Create a card with class `.task-card`.
2. Inspect it in DevTools.
3. Toggle border, padding, and margin values.
4. Explain that layouts are built from many boxes.

Best pre-reading:

- Lesson 4 builds directly on spacing and alignment.

</details>
