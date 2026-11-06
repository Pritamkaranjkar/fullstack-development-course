# Module 1: Introduction to Full Stack Development, Internet, Client-Server, Dev Environment

**Duration:** 2 hours  |  **Prerequisites:** Completed [00-setup](../00-setup/README.md)

## Learning Objectives
By the end of this module, students can:
- Explain what a full stack developer does and the stages of the SDLC
- Distinguish frontend from backend
- Describe how a browser and a server communicate using HTTP/HTTPS
- Trace a request-response cycle
- Set up and use VS Code, Node.js, npm and Git
- Read a typical project structure

---

## 1. What is Full Stack Development? (15 min)

A **full stack developer** works on every layer of a web application:

| Layer | What it does | Examples in this course |
|-------|--------------|-------------------------|
| Frontend | What the user sees and clicks | HTML, CSS, JavaScript, React, Vue |
| Backend | Logic, rules, talking to the database | Node.js, Express, GraphQL |
| Database | Stores data permanently | MongoDB, PostgreSQL |
| DevOps | Builds, ships and runs the app | Git, Docker, Kubernetes |

**Analogy:** a restaurant. The dining room is the frontend, the kitchen is the backend, the pantry is the database, and the delivery of ingredients and opening of the restaurant is DevOps.

### SDLC (Software Development Life Cycle)
1. **Plan:** what are we building and why?
2. **Design:** screens, data, APIs
3. **Develop:** write code
4. **Test:** does it work?
5. **Deploy:** put it online
6. **Maintain:** fix bugs, add features

We will touch every stage using the capstone Task Manager.

### Frontend vs Backend

| | Frontend | Backend |
|---|---|---|
| Runs on | User's browser | Server |
| Languages | HTML, CSS, JavaScript | JavaScript (Node.js) in this course |
| Concerns | Look, feel, interaction | Data, security, business rules |
| User can see the code? | Yes | No |

---

## 2. The Internet and HTTP/HTTPS (25 min)

- The **internet** is a global network of connected computers.
- Every server has an **IP address**. **DNS** translates names (`google.com`) into IP addresses.
- **HTTP** (HyperText Transfer Protocol) is the set of rules browsers and servers use to talk.
- **HTTPS** is HTTP plus encryption (TLS), so data cannot be read or altered in transit. Always use HTTPS in production.

### Parts of a URL
```
https://api.example.com:443/tasks/42?status=done#top
 |         |             |    |       |           |
protocol  host          port path   query       fragment
```

### Common HTTP methods

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Read data | Get all tasks |
| POST | Create data | Add a task |
| PUT / PATCH | Update data | Edit a task |
| DELETE | Remove data | Delete a task |

### Common status codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad request (client error) |
| 401 | Unauthorized (not logged in) |
| 403 | Forbidden (logged in, not allowed) |
| 404 | Not found |
| 500 | Server error |

---

## 3. Client-Server Architecture and the Request-Response Cycle (25 min)

```
 ┌──────────┐   1. Request (GET /tasks)    ┌──────────┐      ┌──────────┐
 │  Client  │ ───────────────────────────► │  Server  │ ───► │ Database │
 │ (Browser)│ ◄─────────────────────────── │ (Node.js)│ ◄─── │          │
 └──────────┘   2. Response (JSON, 200)    └──────────┘      └──────────┘
```

**Steps when you open a page:**
1. You type a URL. The browser asks DNS for the IP address.
2. The browser opens a connection and sends an HTTP **request**.
3. The server processes it (maybe reading the database).
4. The server sends back an HTTP **response** (HTML, JSON, an image...).
5. The browser renders the result.

**Live demo:** open DevTools (`F12`) → **Network** tab → reload any site. Click a request and show its method, status code, headers and response.

### Anatomy of a request and response
```
GET /tasks HTTP/1.1                 HTTP/1.1 200 OK
Host: localhost:3000                Content-Type: application/json
Accept: application/json
                                    [{"id":1,"title":"Learn Git"}]
```

---

## 4. Development Environment (30 min, hands-on)

### VS Code
- Open a folder with **File → Open Folder** (not single files)
- Integrated terminal: `` Ctrl + ` ``
- Install the recommended extensions from [00-setup](../00-setup/README.md)

### Node.js and npm
- **Node.js** lets JavaScript run outside the browser, on your machine or a server.
- **npm** (Node Package Manager) installs and manages libraries.

```bash
node -v                 # check Node version
npm -v                  # check npm version
npm init -y             # create package.json
npm install express     # install a package
```

Key files created by npm:
- `package.json`: project info, scripts, list of dependencies
- `package-lock.json`: exact versions installed (commit it)
- `node_modules/`: downloaded packages (**never commit**, listed in `.gitignore`)

Other package managers (yarn, pnpm) do the same job; we use npm.

### Git basics (full coverage in Module 9)
```bash
git init
git add .
git commit -m "Initial commit"
git status
git log --oneline
```

### Typical project structure
```
task-manager/
├── client/            # frontend code
├── server/            # backend code
├── .gitignore
├── package.json
└── README.md
```

---

## 5. Hands-on Exercises (25 min)
See [exercises/](exercises/):
1. `01-verify-setup.md`: verify tools
2. `02-inspect-network.md`: explore requests in DevTools
3. `03-first-server.md`: run a tiny Node server and make a first Git commit

## 6. Capstone Checkpoint
- A `task-manager` folder with Git initialised
- A working "Hello" Node server (see `examples/http-server/`)
- Tag: `module-1-end`

## 7. Common Mistakes
- Installing Node but not restarting the terminal, so `node -v` fails
- Opening a single file in VS Code instead of the whole folder
- Committing `node_modules/` (always add it to `.gitignore`)
- Confusing HTTP (protocol) with HTML (language)
- Confusing `localhost` (your own machine) with a public website

## 8. Quick Quiz
1. What is the difference between frontend and backend?
2. What does DNS do?
3. What is the difference between HTTP and HTTPS?
4. Which HTTP method would you use to create a new task?
5. What does status code 404 mean? And 500?
6. What is `package.json` for?
7. Why should `node_modules` not be committed?

_Answers are in [solutions/quiz-answers.md](solutions/quiz-answers.md)._

## 9. Further Reading
- MDN: [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- MDN: [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- Node.js docs: https://nodejs.org/en/learn
- Pro Git (free book): https://git-scm.com/book
