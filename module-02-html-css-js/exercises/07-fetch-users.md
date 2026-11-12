# Exercise 7: Fetch and display users, with loading and error states 🟡

## Goal

Fetch a list of users from a public API and show loading and error messages.

## Steps

1. Create a page with a button or automatic fetch on load.
2. Show a loading message before the request starts.
3. Call `fetch()` to a public API.
4. Render the users in a list.
5. Add a `catch` block and show an error message if the request fails.

## Done when

- The page shows a loading state before data arrives.
- The list renders after the response is received.
- Errors are shown in plain text instead of crashing the page.

## Difficulty

🟡 Medium

## Time estimate

20-25 minutes

## Short explanation

`async/await` makes network requests easier to read. Loading and error states help users understand what is happening.

## Common wrong approach

Assuming every network request succeeds. Real requests fail, and code should handle that cleanly.
