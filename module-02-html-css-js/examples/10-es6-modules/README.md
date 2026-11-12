# Example 10: ES Modules

## Goal

Split a small app into modules with `import` and `export`.

## Concepts used

- [Lesson 10: ES6 modules and reverse proxy](../../lessons/10-es6-modules-and-reverse-proxy.md)

## Run it

```bash
cd module-02-html-css-js/examples/10-es6-modules
python3 -m http.server 8008
```

Then open http://localhost:8008.

## Expected output

The browser console should log the API URL and the fetched task data. The page should render the task list after the script loads.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-30 | Loads the module script |
| `api.js` | 1-30 | Exports the API URL and fetch function |
| `ui.js` | 1-80 | Renders the list in the DOM |
| `main.js` | 1-40 | Imports the pieces and starts the app |

### Numbered steps

1. `main.js` imports the API and UI helpers.
2. `api.js` exports the URL and async fetch function.
3. `ui.js` creates DOM elements and appends them to the page.
4. The browser reads module scripts only when `type="module"` is set.

## 3 experiments

1. Change the API URL to a different endpoint and observe the output.
2. Add a new UI function to show a heading before the list.
3. Move some logic out of `main.js` and import it from a new file.

## Troubleshooting

- Browser says `Unexpected token export`  
  Add `type="module"` to your script tag.
- Import path is wrong  
  Make sure the file path and file names match exactly.
- The page loads but nothing renders  
  Confirm the DOM element IDs match between HTML and JavaScript.

## Notes

Modules help keep code organised and easier to maintain as a frontend project grows.
