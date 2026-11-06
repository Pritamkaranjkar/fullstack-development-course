# Solution 5: Create a Project and Commit Three Times

## Working flow

```bash
git init
mkdir -p mini-project
cd mini-project
printf 'node_modules/\n.env\n' > .gitignore
printf '# Mini project\n' > README.md
printf 'console.log("hello");\n' > app.js
git add .
git commit -m "Initial project setup"
printf 'console.log("hello from v2");\n' > app.js
git add .
git commit -m "Update app message"
printf 'console.log("hello from v3");\n' > app.js
git add .
git commit -m "Final project state"
git log --oneline
```

## Approach

This follows the Git workflow: initialise, add files, commit, then make more meaningful changes and commit again. The important idea is to save snapshots of change so the project history is easy to review.

## Common wrong approach

Do not commit `node_modules` or secrets. That makes the repository noisy and can expose private data. A proper `.gitignore` keeps the repo clean.
