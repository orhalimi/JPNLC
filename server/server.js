import CONST from './tools/const';

require.extensions['.css'] = () => {

};

require('module-alias').addAliases({
  app: `${__dirname}/../app/js`,
  components: `${__dirname}/../app/js/components`,
  conjuctionPractice: `${__dirname}/../app/js/components/conjuctionPractice`,
  css: `${__dirname}/../app/css`,
  assets: `${__dirname}/../app/assets`,
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const fs = require('fs');
const App = require('../app/js/App').default;
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const DB = require('./tools/DB');

DB.mongoConnect();


const { StaticRouter } = ReactRouter;
const port = 8080;
const baseTemplate = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf8');
const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next();
});
server.use(express.static(`${__dirname}/../build`));
server.use('/api', apiRouter);
server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>);

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.status(context.statusCode || 200);
    res.write(baseTemplate.replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`));
    res.end();
  }
});
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

console.log(`listening on ${port}`);
server.listen(port);
