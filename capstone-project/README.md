# Capstone: Task Manager

A full stack app where users register, log in, and manage their own tasks.

## Features (final version)
- Register / login (JWT)
- Create, read, update, delete tasks
- Mark tasks complete, filter by status
- Responsive UI
- Dockerized and deployed with a live URL

## Build plan by module

| Module | Milestone |
|--------|-----------|
| 1 | Project folder, Git repo, "Hello" Node server |
| 2 | Static Task Manager UI (HTML/CSS/JS, fetch from mock data) |
| 3 | UI rebuilt in React (components, hooks, routing) |
| 4 | One small widget rebuilt in Vue for comparison |
| 5 | Express REST API with CRUD for tasks |
| 6 | GraphQL version of the tasks API |
| 7 | Tasks stored in MongoDB or PostgreSQL |
| 8 | Registration, login, protected routes |
| 9 | Dockerfile and docker-compose |
| 10 | Kubernetes basics, cloud deployment, demo |

## Module 2 milestone

The frontend checkpoint for Module 2 is a static Task Manager UI. Students should be able to:

- render a task list with HTML and CSS
- add a task from a form
- mark a task complete or delete it
- show counts for total, done, and open items
- load mock data with `fetch()` and `async/await`
- make the layout responsive for mobile screens

Files:

- [module-02-html-css-js/starter](../module-02-html-css-js/starter/)
- [module-02-html-css-js/solutions/capstone-task-manager-ui](../module-02-html-css-js/solutions/capstone-task-manager-ui/)

## Checkpoint tags
`module-N-start` and `module-N-end` for N = 1..10.
