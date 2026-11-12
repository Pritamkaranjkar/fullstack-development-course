const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ message: 'API running', tasks: ['Write HTML', 'Write CSS'] }));
});

server.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});
