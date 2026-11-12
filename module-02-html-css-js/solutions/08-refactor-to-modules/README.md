# Solution 8: Refactor to modules

## Goal

Refactor a simple script into separate data and render modules.

## How to run

```bash
cd module-02-html-css-js/solutions/08-refactor-to-modules
python3 -m http.server 8010
```

Then open http://localhost:8010.

## What it does

- `tasks.js` exports the array of task data.
- `render.js` exports a function to render tasks to the DOM.
- `main.js` imports both and runs the app.

## Notes

This solution demonstrates a clean split between data and UI logic.
