'use strict';

// CommonJS: Node uses this module format by default.
const http = require('http');

// 1. We keep the data in one place so the routes can share it.
const tasks = [
  { id: 1, title: 'Learn Git', done: false },
  { id: 2, title: 'Build a server', done: true }
];

// 2. The request handler decides what to return.
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello from Module 1!');
  } else if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
});

// 3. Listen on localhost so we can open it in a browser.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
