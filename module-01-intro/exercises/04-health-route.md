# Exercise 4: Add a Health Route and Show It on the Client

Goal: add a `/health` route to the demo server and display the result on the page.

## Steps

1. Open the file `module-01-intro/examples/02-client-server-demo/server.js`.
2. Add a new route: `GET /health` that returns JSON like `{ "status": "ok" }`.
3. Add the correct response headers for JSON.
4. Update the frontend `index.html` to call `/health` and show the result in the page.
5. Test the page manually in the browser.

**Done when:** the page loads and shows `status: ok` or a similar message.

**Difficulty:** 🟡
**Time estimate:** 15 minutes
