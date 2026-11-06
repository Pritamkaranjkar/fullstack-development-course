# Module 1 Quiz

## Questions

1. What is the difference between frontend and backend?
2. What does DNS do?
3. What is the difference between HTTP and HTTPS?
4. Which HTTP method would you use to create a new task?
5. What does status code 404 mean?
6. What does status code 500 usually mean?
7. Why is a `package.json` file important?
8. Why should `node_modules` not be committed?
9. What happens when a browser sends a request to a server?
10. If a browser fetches data from another port and the server does not send the correct CORS header, what happens?

## Answers

<details>
<summary>1. Frontend vs backend</summary>
The frontend is the visible UI in the browser. The backend runs on a server and handles rules, data, and security.
</details>

<details>
<summary>2. DNS</summary>
DNS turns a domain name like `example.com` into an IP address so a browser can find the server.
</details>

<details>
<summary>3. HTTP vs HTTPS</summary>
HTTP is plain text communication. HTTPS adds encryption so the data is protected while moving across the internet.
</details>

<details>
<summary>4. Create a task</summary>
Use `POST` to create a new task.
</details>

<details>
<summary>5. 404</summary>
A `404` means the requested resource was not found.
</details>

<details>
<summary>6. 500</summary>
A `500` usually means the server had an internal error while handling the request.
</details>

<details>
<summary>7. package.json</summary>
It stores project metadata, scripts, and dependency information.
</details>

<details>
<summary>8. node_modules</summary>
`node_modules` is generated from package metadata and can be recreated with `npm install`, so it is usually ignored by Git.
</details>

<details>
<summary>9. Browser request</summary>
The browser sends an HTTP request to a server. The server processes it and sends back an HTTP response. The browser then renders the result.
</details>

<details>
<summary>10. CORS</summary>
The browser usually blocks the fetch because the response is missing the required CORS header. The server must allow the request origin.
</details>

[Back to Module 1 landing page](README.md)
