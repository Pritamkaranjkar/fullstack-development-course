# Module 1: Introduction to Full Stack Development

You are here: Module 1 > [Landing page](README.md)

Previous: [00-setup](../00-setup/README.md)  |  Next: [Module 2](../module-02-html-css-js/README.md)

**Duration:** 2 hours  |  **Prerequisites:** [00-setup](../00-setup/README.md)  |  **Focus:** full stack basics, internet, HTTP, client-server, dev environment

## Overview

This module introduces the foundation of web development. You will learn what a full stack app is, how browsers and servers talk to each other, and how a basic project is set up.

You do not need to know React or Express yet. You only need a working browser, terminal, and a willingness to learn the ideas behind the tools.

## Learning objectives

By the end of this module, you should be able to:

- explain the difference between frontend, backend, database, and DevOps
- describe the internet, DNS, IP addresses, URLs, HTTP, and HTTPS
- explain the client-server request-response cycle
- use DevTools to inspect network traffic
- install and verify VS Code, Node.js, npm, and Git
- recognise a simple project structure and use basic Git commands

## Lesson map

| Lesson | Time | Topic | Link |
|---|---:|---|---|
| 1 | 15 min | What is full stack? | [01-what-is-full-stack](lessons/01-what-is-full-stack.md) |
| 2 | 20 min | Internet and HTTP | [02-internet-and-http](lessons/02-internet-and-http.md) |
| 3 | 20 min | Client-server request response | [03-client-server-request-response](lessons/03-client-server-request-response.md) |
| 4 | 20 min | Dev environment | [04-dev-environment](lessons/04-dev-environment.md) |
| 5 | 15 min | Project structure and Git first steps | [05-project-structure-and-git-first-steps](lessons/05-project-structure-and-git-first-steps.md) |

## Example map

| Example | What it shows | Link |
|---|---|---|
| 1 | A minimal HTTP server with routes and status codes | [01-hello-http-server](examples/01-hello-http-server/README.md) |
| 2 | Browser + server together with CORS and `fetch()` | [02-client-server-demo](examples/02-client-server-demo/README.md) |
| 3 | A raw HTTP request to a public API | [03-inspect-raw-http](examples/03-inspect-raw-http/README.md) |
| 4 | `npm` scripts, `package.json`, and `node_modules` basics | [04-npm-basics](examples/04-npm-basics/README.md) |

## Progress checklist

### Lessons

- [ ] [01-what-is-full-stack](lessons/01-what-is-full-stack.md)
- [ ] [02-internet-and-http](lessons/02-internet-and-http.md)
- [ ] [03-client-server-request-response](lessons/03-client-server-request-response.md)
- [ ] [04-dev-environment](lessons/04-dev-environment.md)
- [ ] [05-project-structure-and-git-first-steps](lessons/05-project-structure-and-git-first-steps.md)

### Examples

- [ ] [01-hello-http-server](examples/01-hello-http-server/README.md)
- [ ] [02-client-server-demo](examples/02-client-server-demo/README.md)
- [ ] [03-inspect-raw-http](examples/03-inspect-raw-http/README.md)
- [ ] [04-npm-basics](examples/04-npm-basics/README.md)

### Exercises

- [ ] [01 Verify setup](exercises/01-verify-setup.md)
- [ ] [02 Inspect Network tab](exercises/02-inspect-network.md)
- [ ] [03 First server with /about](exercises/03-first-server.md)
- [ ] [04 Add /health and show it on the demo page](exercises/04-health-route.md)
- [ ] [05 Create project, add .gitignore, make 3 commits](exercises/05-git-project.md)

### Quiz

- [ ] [Module 1 quiz](quiz.md)

## Capstone checkpoint

End of Module 1 goals:

- Git has been initialised in a project folder
- a simple hello server is running locally
- the repository has at least one clean commit
- you can explain the request-response cycle in plain English
- you tagged the checkpoint as `module-1-end`

```bash
git init
git add .
git commit -m "Module 1 checkpoint"
git tag module-1-end
```

## Suggested pacing

### 2-hour live session

- 0:00-0:20: Lesson 1 and 2
- 0:20-0:45: Lesson 3 and Example 1
- 0:45-1:05: Lesson 4 and Example 4
- 1:05-1:30: Example 2 and DevTools walkthrough
- 1:30-1:50: Exercise 3 and 4
- 1:50-2:00: Quiz and recap

### Self-paced

- Day 1: Lessons 1-3, Example 1, Exercise 1-3
- Day 2: Lessons 4-5, Example 4, Exercise 4-5, quiz
- Optional: review the raw HTTP example again and compare the output with the browser requests

## Next module

Continue to [Module 2: HTML, CSS, and JavaScript](../module-02-html-css-js/README.md).

## Instructor reminder

This module gives students the model they need for the rest of the course. If a student only remembers three ideas, they should be:

1. a browser sends a request and a server sends a response
2. a full stack app has separate layers
3. Git and a clear folder structure keep projects manageable

Previous: [00-setup](../00-setup/README.md)  |  Next: [Module 2](../module-02-html-css-js/README.md)
