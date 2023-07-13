const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const apiHandler = require('./src/api/graphql');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === './src/api/graphql') {
      apiHandler(req, res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001 srever is running');
  });
});
