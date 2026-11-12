# Example 1: Semantic Page

## Goal

Build a semantic landing page for the Task Manager.

## Concepts used

- [Lesson 1: HTML semantic elements](../../lessons/01-html-semantic-elements.md)

## Run it

```bash
cd module-02-html-css-js/examples/01-semantic-page
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Expected output

The browser should show a page with a header, navigation, a main content area, task cards, and a footer. The structure should be readable and clearly separated.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-80 | Defines the semantic structure of the landing page |
| `styles.css` | 1-120 | Applies layout, spacing, colors, and typography |

### Numbered steps

1. `header` wraps the page title and navigation.
2. `main` contains the main content, including task sections and highlights.
3. `article` and `section` create meaningful content blocks.
4. CSS styles the page without changing the semantic structure.

## 3 experiments

1. Replace one `section` with a `div` and observe how the page still looks but the structure becomes less meaningful.
2. Add an extra `h2` heading and see how the hierarchy changes.
3. Add a new navigation item and notice the layout still works.

## Troubleshooting

- Page is blank in the browser  
  Open the file from a local server instead of the filesystem, or check the HTML file name.
- Styles are not loading  
  Ensure the CSS file path matches the HTML file and lives in the same folder.
- Broken layout  
  Check that the page has a valid HTML structure and no missing closing tags.

## Notes

This example demonstrates that semantic tags improve readability and structure even before CSS is added.
