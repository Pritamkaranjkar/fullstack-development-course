'use strict';

// CommonJS: Node uses this module format by default.
const https = require('https');

// 1. We call a public API to inspect a real HTTP response.
const url = 'https://jsonplaceholder.typicode.com/todos/1';

https.get(url, (res) => {
  // 2. Log the response status so we know whether the request succeeded.
  console.log('statusCode:', res.statusCode);

  // 3. Log a few headers to show how the server describes the data.
  console.log('content-type:', res.headers['content-type']);
  console.log('server:', res.headers.server);

  let body = '';

  // 4. Add chunks of data to a string as they arrive.
  res.on('data', (chunk) => {
    body += chunk;
  });

  // 5. When the response finishes, print the full payload.
  res.on('end', () => {
    console.log('body:', body);
  });
}).on('error', (error) => {
  console.error('Request failed:', error.message);
});
