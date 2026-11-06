# Exercise 3: First Server and First Commit (10 min)

1. Create a folder `task-manager` and open it in VS Code.
2. Create `server.js` (copy from `examples/http-server/server.js`).
3. Run it: `node server.js` and open http://localhost:3000.
4. Add a new route `/about` that returns the text `Task Manager v1`.
5. Initialise Git and commit:
   ```bash
   git init
   git add .
   git commit -m "Add hello server"
   ```
6. Create a `.gitignore` containing `node_modules/` and commit it.

**Done when:** `git log --oneline` shows at least two commits and `/about` works.
