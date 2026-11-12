# Example 11: Reverse Proxy Demo

## Goal

Show how a small proxy server forwards requests to different backend servers using only Node built-ins.

## Concepts used

- [Lesson 10: ES6 modules and reverse proxy](../../lessons/10-es6-modules-and-reverse-proxy.md)

## Run it

```bash
cd module-02-html-css-js/examples/11-reverse-proxy-demo
node app-server.js
node api-server.js
node proxy-server.js
```

Then open:

- http://localhost:3000/
- http://localhost:3000/api

## Expected output

The app server responds on port 3002 with a page that says `Frontend app running.` The API server responds on port 3001 with JSON. The proxy server on port 3000 forwards `/api` to port 3001 and everything else to port 3002.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `app-server.js` | 1-40 | Frontend server for HTML pages |
| `api-server.js` | 1-40 | API server for JSON data |
| `proxy-server.js` | 1-80 | Receives requests and forwards them |

### Numbered steps

1. The browser sends a request to the proxy on port 3000.
2. `proxy-server.js` checks the URL path.
3. If the path starts with `/api`, it forwards to port 3001.
4. Otherwise it forwards to port 3002.
5. The response returns to the browser as if it came from one server.

## 3 experiments

1. Request `/api` and compare it with `/` to see the different upstream servers.
2. Change the routing rule so `/health` goes to the API server.
3. Add a second backend path, such as `/admin`, and forward it to a different port.

## Troubleshooting

- `ECONNREFUSED`  
  Ensure all three servers are started before making requests.
- Browser shows a blank page  
  Check that the port numbers and path names match the code exactly.
- Middleware does not route traffic  
  Confirm the path check is using `req.url.startsWith('/api')`.

## Notes

This example keeps the setup simple: one port for the browser, different ports for app and API, and a single proxy deciding where to send requests.
