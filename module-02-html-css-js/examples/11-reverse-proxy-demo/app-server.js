const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Frontend app running.</h1>');
});

server.listen(3002, () => {
  console.log('Frontend server running on http://localhost:3002');
});
