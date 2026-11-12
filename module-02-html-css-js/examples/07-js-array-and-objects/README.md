# Example 7: JavaScript Arrays and Objects

## Goal

Transform a list of task objects using `map()`, `filter()`, and `find()`.

## Concepts used

- [Lesson 7: JavaScript core](../../lessons/07-javascript-core.md)

## Run it

```bash
cd module-02-html-css-js/examples/07-js-array-and-objects
node index.js
```

## Expected output

The terminal prints:

```text
Pending tasks: [ { id: 2, title: 'Write CSS', done: false }, { id: 3, title: 'Add JS', done: false } ]
First matching task: { id: 2, title: 'Write CSS', done: false }
```

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.js` | 1-40 | Defines tasks and applies array methods |

### Numbered steps

1. An array of task objects stores each task.
2. `filter()` keeps only incomplete tasks.
3. `find()` returns the first item with a matching id.
4. `console.log()` prints the results to the terminal.

## 3 experiments

1. Add another task object with `done: true` and see how the pending list changes.
2. Change the `find()` condition to look for a task titled `Add JS`.
3. Use `map()` to create a new array of task titles only.

## Troubleshooting

- Nothing prints  
  Check that `node index.js` is run from the correct folder.
- Incorrect results  
  Verify the condition inside `filter()` or `find()` matches the object shape.
- `map` or `filter` not found  
  Confirm the value is an array and not a plain object.

## Notes

This example shows the utility of JavaScript collection methods when working with arrays of objects.
