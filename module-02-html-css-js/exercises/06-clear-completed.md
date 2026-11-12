# Exercise 6: Add a "clear completed" button to the DOM to-do 🟡

## Goal

Extend a to-do app with a button that removes all completed items.

## Steps

1. Create a list of tasks in the DOM.
2. Add a button labeled `Clear completed`.
3. When the user clicks it, remove every item whose `done` property is `true`.
4. Update the page after the removal.
5. Check that remaining items still work.

## Done when

- The completed tasks are removed from the list.
- The button works on click.
- The app still responds correctly to other actions.

## Difficulty

🟡 Medium

## Time estimate

15-20 minutes

## Short explanation

Event listeners let you react to user actions. Filtering the task list before rendering keeps the DOM in sync with the data.

## Common wrong approach

Removing items from the DOM without also updating the underlying array or state. This creates inconsistent data.
