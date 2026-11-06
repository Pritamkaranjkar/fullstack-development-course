# Example 2: Client-Server Demo

## Goal

See a browser request data from a local server and display it on a page. This shows the client-server model and the `Access-Control-Allow-Origin` header in plain language.

## Concepts used

- [Lesson 2: Internet and HTTP](../../lessons/02-internet-and-http.md)
- [Lesson 3: Client-server request response](../../lessons/03-client-server-request-response.md)

## Run it

```bash
cd module-01-intro/examples/02-client-server-demo
node server.js
```

Then open http://localhost:3001/ in a browser.

## Expected output

The page shows a `Load tasks` button. When you click it, the page fetches JSON from the server and prints:

- Learn HTTP (open)
- Build a frontend (done)

The terminal shows requests like:

```text
Server running at http://localhost:3001
GET /tasks
GET /
```

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `server.js` | 1-39 | Serves the HTML page and exposes `/tasks` with JSON |
| `index.html` | 1-39 | Calls `fetch()` and renders the returned tasks |

### Numbered steps

1. `server.js` starts a local web server on port `3001`.
2. The browser loads `/` and receives the HTML page.
3. The browser sends a `fetch()` request to `/tasks`.
4. The server adds the `Access-Control-Allow-Origin: *` header so the browser accepts the response.
5. The browser parses the JSON and updates the page.

## 3 experiments

1. Change the server’s response data and reload the page. Observe what appears in the list.
2. Remove the CORS header from `server.js` and refresh the page. Observe the browser error in DevTools.
3. Add a new task object to the array and see how it renders on the page.

## Troubleshooting

- Browser shows a CORS error  
  Check that the server includes `Access-Control-Allow-Origin: *`.
- `fetch` fails because the server is not running  
  Start the server with `node server.js`.
- The page loads but no tasks appear  
  Check the browser console for a JS error or confirm `/tasks` returns valid JSON.
- `Not found` in the browser  
  Ensure the requested path is `/tasks` and not `/task`.

## Notes

CORS is a browser protection rule. It stops a web page from reading data from a different origin without permission. In this example, the server allows it with a simple header.
