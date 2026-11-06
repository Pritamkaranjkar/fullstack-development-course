# Example 3: Inspect Raw HTTP

## Goal

See the raw HTTP response from a real public API and inspect the important fields: method, status, headers, and body.

## Concepts used

- [Lesson 2: Internet and HTTP](../../lessons/02-internet-and-http.md)
- [Lesson 3: Client-server request response](../../lessons/03-client-server-request-response.md)

## Run it

```bash
cd module-01-intro/examples/03-inspect-raw-http
node raw-request.js
```

## Expected output

You should see output like:

```text
statusCode: 200
content-type: application/json; charset=utf-8
server: cloudflare
body: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}
```

The exact `server` header may vary by provider, but the status code and JSON body should be similar.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `raw-request.js` | 1-30 | Sends an HTTPS GET request and prints the response |

### Numbered steps

1. The script calls `https.get(...)` with a real URL.
2. The response object includes a status code and headers.
3. Data arrives in chunks, so the script collects it into a string.
4. The `end` event means the response is complete.
5. The script prints the body as JSON.

## 3 experiments

1. Replace the URL with `https://jsonplaceholder.typicode.com/todos/2` and compare the output.
2. Change the request to a missing route like `/todos/99999` and observe the status code.
3. Add `console.log('method: GET')` before the request and note how it helps explain the flow.

## Troubleshooting

- `ECONNRESET` or network error  
  Check your internet connection. Try a different public API.
- No output appears  
  Make sure you are running the script from the correct folder and that Node is installed.
- Response body looks incomplete  
  Ensure the `data` and `end` handlers both exist as shown.
- `Cannot find module 'https'`  
  This should not happen. `https` is a built-in Node module.

## Notes

This is a raw, low-level look at HTTP. You will use higher-level tools later, but this example is useful because it shows exactly what a browser is receiving.
