'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const tasks = [
  { id: 1, title: 'Learn HTTP', done: false },
  { id: 2, title: 'Build a frontend', done: true }
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*' 
    });
    res.end(JSON.stringify(tasks));
    return;
  }

  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
