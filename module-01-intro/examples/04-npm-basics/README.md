# Example 4: npm Basics

## Goal

Learn how a Node project is configured with `package.json`, how scripts run, and why dependencies are tracked differently from development-only tools.

## Concepts used

- [Lesson 4: Dev environment](../../lessons/04-dev-environment.md)
- [Lesson 5: Project structure and Git first steps](../../lessons/05-project-structure-and-git-first-steps.md)

## Run it

```bash
cd module-01-intro/examples/04-npm-basics
npm install
npm start
npm run dev
```

## Expected output

```text
Start script: npm basics are working
This app is ready for a package install and scripts demo.
```

If you install `nodemon` as a dev dependency, you can also run:

```bash
npm install --save-dev nodemon
npx nodemon index.js
```

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `package.json` | 1-19 | Declares scripts and project metadata |
| `index.js` | 1-6 | Prints a simple startup message |
| `package-lock.json` | generated | Records the exact installed package versions |

### Numbered steps

1. `npm init` or a manual `package.json` creates the project metadata.
2. The `scripts` field defines commands like `npm start` and `npm run dev`.
3. `dependencies` are runtime packages required by the app.
4. `devDependencies` are used only during development, such as `nodemon`.
5. `node_modules` is generated locally and can be reproduced by reinstalling packages.

## 3 experiments

1. Change the `start` script from `node index.js` to `node -p "hello"` and run `npm start`.
2. Install `nodemon` as a dev dependency and compare the `package.json` before and after.
3. Delete `node_modules` and run `npm install` to see how the project is restored.

## Troubleshooting

- `npm: command not found`  
  Install Node.js and reopen the terminal.
- `Missing script: dev`  
  Add the script to `package.json` or run `npm start` instead.
- `ENOENT` or file not found  
  Confirm you are in the correct directory and the file name matches `index.js`.
- `node_modules` seems huge  
  This is normal. It is usually not committed to Git.

## Notes

`dependencies` are needed when the app runs in production. `devDependencies` are extra tools for development, such as code watchers or test libraries. Package-lock records the exact version tree so your install is consistent.
