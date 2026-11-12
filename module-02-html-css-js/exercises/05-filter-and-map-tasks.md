# Exercise 5: Filter and map an array of tasks 🟢

## Goal

Use JavaScript array methods to transform a task list.

## Steps

1. Create an array of task objects with at least five items.
2. Use `filter()` to keep only incomplete tasks.
3. Use `map()` to create a new array of task titles.
4. Log the result in the console.
5. Add a simple label like `Pending tasks:`.

## Done when

- The code returns a list of only incomplete tasks.
- The data is transformed without mutating the original array.
- The output is readable in the console.

## Difficulty

🟢 Easy

## Time estimate

10-15 minutes

## Short explanation

`filter()` selects items that match a condition, and `map()` creates a new value from each item.

## Common wrong approach

Mutating the original array in place. That can cause confusing bugs when you want to keep the original data.
