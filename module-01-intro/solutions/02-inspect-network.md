# Solution 2: Inspect the Network Tab

## Working result

A typical browser requests the page and often several linked files. You should be able to identify:

- the request method, usually `GET`
- the status code, usually `200`
- the `Content-Type`, often `text/html` for a page or `application/json` for an API response
- the total number of requests for the page

## Approach

Open DevTools, then open the Network tab and refresh the page. Click the top request and read the method, status, headers, and response preview. This shows what the browser asked for and what the server sent back.

## Common wrong approach

Do not confuse the browser’s page view with the raw HTTP response. The page is rendered after the browser processes the response. The Network tab lets you inspect the actual request and response, not just the final display.
