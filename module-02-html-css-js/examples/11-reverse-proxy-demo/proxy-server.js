const http = require('http');

const target = {
  api: 'http://localhost:3001',
  app: 'http://localhost:3002'
};

const server = http.createServer((req, res) => {
  const url = req.url || '/';
  const targetUrl = url.startsWith('/api') ? target.api : target.app;

  const proxyRequest = http.request(`${targetUrl}${url}`, { method: req.method }, (proxyResponse) => {
    res.writeHead(proxyResponse.statusCode || 200, proxyResponse.headers);

    proxyResponse.pipe(res);
  });

  req.pipe(proxyRequest);
});

server.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
