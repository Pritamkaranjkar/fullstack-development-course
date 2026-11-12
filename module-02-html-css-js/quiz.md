# Module 2 Quiz

## Questions

1. What is semantic HTML, and why is it useful?
2. What is the difference between a `div` and a `section` in a page structure?
3. Which CSS property controls the space inside a box, between content and border?
4. What is the main difference between Flexbox and Grid?
5. What happens when you add `@media (min-width: 700px)` to a stylesheet?
6. What is the difference between `let` and `const` in JavaScript?
7. What is the DOM, and why do we use it?
8. What is the purpose of `addEventListener()`?
9. What does `fetch()` return, and how do we read the JSON data from it?
10. What is a reverse proxy, and why might a real app use one?

## Answers

<details>
<summary>1. Answer</summary>
Semantic HTML uses tags with meaning, such as `header`, `main`, and `article`. It helps browsers, search engines, and assistive tools understand the structure of the page.
</details>

<details>
<summary>2. Answer</summary>
A `div` is a generic container with no built-in meaning. A `section` is meant to group a part of the page with a clear topic or purpose.
</details>

<details>
<summary>3. Answer</summary>
`padding` controls the space inside the box, between the content and the border.
</details>

<details>
<summary>4. Answer</summary>
Flexbox is one-dimensional and works well for rows or columns. Grid is two-dimensional and works well for page layouts with rows and columns at the same time.
</details>

<details>
<summary>5. Answer</summary>
The styles inside the media query apply only when the browser width is at least 700px.
</details>

<details>
<summary>6. Answer</summary>
`let` can be reassigned later. `const` is meant to stay constant once it is assigned.
</details>

<details>
<summary>7. Answer</summary>
The DOM is the browser's structured representation of the page. JavaScript uses it to read, update, create, and delete elements in the UI.
</details>

<details>
<summary>8. Answer</summary>
`addEventListener()` listens for browser events such as clicks, key presses, and form submissions, then runs a function when the event occurs.
</details>

<details>
<summary>9. Answer</summary>
`fetch()` returns a Promise. You read the JSON with `await response.json()`, after checking that the response is OK.
</details>

<details>
<summary>10. Answer</summary>
A reverse proxy is a server that accepts requests and forwards them to the correct app or service. It is useful for routing traffic, hiding internal app details, and simplifying deployment.
</details>
