// A tiny HTTP server using only Node's built-in module.
// Run:  node server.js
// Open: http://localhost:3000  and  http://localhost:3000/tasks

const http = require('http');

const tasks = [
  { id: 1, title: 'Learn Git', done: false },
  { id: 2, title: 'Build a server', done: true },
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`); // watch requests arrive

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the server!');
  } else if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
