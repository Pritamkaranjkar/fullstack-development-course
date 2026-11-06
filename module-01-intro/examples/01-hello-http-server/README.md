# Example 1: Hello HTTP Server

## Goal

Run a tiny Node HTTP server and understand how a browser asks for routes and receives responses.

## Concepts used

- [Lesson 2: Internet and HTTP](../../lessons/02-internet-and-http.md)
- [Lesson 3: Client-server request response](../../lessons/03-client-server-request-response.md)

## Run it

```bash
cd module-01-intro/examples/01-hello-http-server
node server.js
```

Then open:

- http://localhost:3000/
- http://localhost:3000/tasks
- http://localhost:3000/unknown

## Expected output

In the terminal, you should see:

```text
Server running at http://localhost:3000
GET /
GET /tasks
GET /unknown
```

In the browser:

- `/` returns `Hello from Module 1!`
- `/tasks` returns JSON like `[{"id":1,"title":"Learn Git","done":false},...]`
- `/unknown` returns `Not found`

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `server.js` | 1-28 | Creates a Node HTTP server and routes requests |

### Numbered steps

1. `http.createServer(...)` creates a server that listens for incoming requests.
2. The `req.url` value tells the code which path was requested.
3. `req.method` tells the code whether the browser used GET, POST, or another method.
4. `res.writeHead(...)` sets the status code and response content type.
5. `res.end(...)` sends the final response body to the browser.
6. `server.listen(3000)` starts the server on port 3000.

## 3 experiments

1. Change the home route to return a different greeting. Refresh the page and observe the new text.
2. Add a new route like `/about` that returns `Task Manager v1`. Then open `/about` in the browser.
3. Change the 404 response text to something else and request a missing page.

## Troubleshooting

- `Error: listen EADDRINUSE: address already in use`  
  Another app is already using port 3000. Stop it or change the port.
- `Cannot find module 'http'`  
  This is not a real Node error. Ensure you are running `node server.js` from the correct folder.
- Browser shows `Not found` for `/`  
  Check that the route is exactly `'/'` and the method is `GET`.
- Terminal prints nothing  
  Confirm the server started and the port is open.

## Notes

This is the simplest form of a web server. It shows the core client-server pattern without any framework.
