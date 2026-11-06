# Full Stack Development Course

A 30-hour, hands-on course covering the modern full stack: HTML/CSS/JS, React, Vue, Node/Express, GraphQL, databases, authentication, Docker, Kubernetes and deployment.

## How this repo works

- Each `module-XX-*` folder has the same layout (see below).
- We build **one capstone project (Task Manager)** step by step. Each module ends with a working checkpoint.
- Git **tags** mark the start and end of each module, so you can catch up if you fall behind.

## Course map

| Module | Topic | Hours |
|--------|-------|-------|
| [00](00-setup/) | Pre-class setup | - |
| [01](module-01-intro/) | Intro, Internet, Client-Server, Dev Environment | 2 |
| [02](module-02-html-css-js/) | HTML5, CSS3, JavaScript ES6+, Responsive Design | 4 |
| [03](module-03-react/) | React.js: Components, Hooks, Routing, State | 5 |
| [04](module-04-vue/) | Vue.js and Comparison with React | 2 |
| [05](module-05-node-express/) | Node.js, Express.js, REST APIs, Middleware | 5 |
| [06](module-06-graphql/) | GraphQL, Apollo Server & Client | 2 |
| [07](module-07-databases/) | MongoDB, Mongoose, PostgreSQL, Supabase, NeonDB | 3 |
| [08](module-08-auth-security/) | Authentication (JWT), Authorization, Security | 2 |
| [09](module-09-git-docker/) | Git, GitHub, Docker, Containers, VMs | 2 |
| [10](module-10-kubernetes-deploy/) | Kubernetes, Deployment, Production, Final Project | 3 |
| | **Total** | **30** |

## Module folder layout

```
module-XX-name/
├── README.md       # study notes (what the instructor explains)
├── slides/         # slides / PDF (optional)
├── examples/       # short demo code shown in class
├── exercises/      # tasks for students
└── solutions/      # released after the session
```

## Getting started (students)

```bash
git clone <repo-url>
cd fullstack-course
```

Start with [00-setup](00-setup/README.md), then open `module-01-intro/README.md`.

### Catching up with checkpoints

```bash
git tag                          # list checkpoints
git checkout module-3-start      # jump to the start of Module 3
```

## Instructor notes

- Module template: [resources/module-template.md](resources/module-template.md)
- Capstone plan: [capstone-project/README.md](capstone-project/README.md)
- Keep `solutions/` on the `solutions` branch if you do not want students to see them early.
# fullstack-development-course
