# Example 9: Fetch Tasks

## Goal

Fetch tasks from a public JSON API and render the list with loading and error states.

## Concepts used

- [Lesson 9: Fetch and async/await](../../lessons/09-fetch-and-async-await.md)

## Run it

```bash
cd module-02-html-css-js/examples/09-fetch-tasks
python3 -m http.server 8007
```

Then open http://localhost:8007.

## Expected output

The browser should show a loading message while the request is running. After a short delay, the list of tasks appears. If the request fails, an error message is shown instead.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-60 | Creates the container for loading, error, and list output |
| `script.js` | 1-120 | Fetches data with async/await and renders the result |
| `styles.css` | 1-140 | Styles loading, success, and error states |

### Numbered steps

1. The script marks the page as loading before the request starts.
2. `fetch()` sends a network request to JSONPlaceholder.
3. `await` waits for the response to finish.
4. The app renders the tasks or shows an error message.

## 3 experiments

1. Change the `_limit` value from `10` to `3` and see how the list length changes.
2. Add a failed request by pointing to a non-existent path and observe the error state.
3. Add a `Refresh` button that calls the fetch function again.

## Troubleshooting

- The list never appears  
  Check that the browser is online and the API URL is correct.
- Error state appears immediately  
  This may mean the fetch URL is wrong or the browser is blocked from the network.
- No styles are applied  
  Confirm the stylesheet link and file name are correct.

## Notes

This is a practical example of frontend async work: the page stays usable while data is loading.
