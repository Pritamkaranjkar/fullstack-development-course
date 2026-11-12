# Exercise 8: Refactor a script into ES modules 🟡

## Goal

Split a small script into separate files using `import` and `export`.

## Steps

1. Place task data in one file.
2. Place a function to render tasks in another file.
3. Import the data and render function into a main file.
4. Add `type="module"` to the script tag.
5. Verify the page still works in the browser.

## Done when

- The logic is split into separate files.
- The import path is correct.
- The browser can run the page without syntax errors.

## Difficulty

🟡 Medium

## Time estimate

15-20 minutes

## Short explanation

Modules help separate responsibilities. One file can hold data, one can handle UI, and one can control the app flow.

## Common wrong approach

Using `import` without adding `type="module"`, which causes the browser to reject the syntax.
