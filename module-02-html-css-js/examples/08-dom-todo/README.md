# Example 8: DOM To-do App

## Goal

Create a small to-do list that adds, marks as complete, and deletes tasks using the DOM.

## Concepts used

- [Lesson 8: DOM and events](../../lessons/08-dom-and-events.md)

## Run it

```bash
cd module-02-html-css-js/examples/08-dom-todo
python3 -m http.server 8006
```

Then open http://localhost:8006.

## Expected output

The page shows an input and button. Adding a task creates a new list item, clicking a task toggles its completed state, and deleting a task removes it.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-70 | Creates the form and list container |
| `script.js` | 1-100 | Adds event listeners and updates the DOM |
| `styles.css` | 1-120 | Styles the task list |

### Numbered steps

1. The form submit event listens for new task entries.
2. `document.createElement()` creates a new list item.
3. The click event checks whether a task is complete or should be deleted.
4. JavaScript updates the list in the page without reloading.

## 3 experiments

1. Change the button text from `Add task` to `Save task` and observe the page still works.
2. Add a `Clear all` button and make it delete every task.
3. Add a `data-id` attribute to each task item and use it to remove a specific item.

## Troubleshooting

- New tasks do not appear  
  Confirm the form submit handler runs and the list container exists in the DOM.
- Click events do not work  
  Confirm the event listener is attached after the page is loaded or is inside the script.
- Items are duplicated  
  Check that you are not adding the same node twice.

## Notes

This example is a simple app model: HTML for structure, CSS for styling, and JavaScript for behavior.
