require('babel-register')({
  presets: ['es2015', 'react'],
});

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
const ReactRouter = require('react-router-dom');
const fs = require('fs');
const App = require('../app/js/App').default;

const { StaticRouter } = ReactRouter;
const port = 8080;
const baseTemplate = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf8');
// const template = _.template(baseTemplate);

const server = express();


server.use('/build', express.static(`${__dirname}/../build`));
server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const GeneretedBody = React.createElement(
    StaticRouter, { location: req.url, context },
    React.createElement(App)
  );
  const body = ReactDOMServer.renderToString(GeneretedBody);

  if (context.url) {
    res.redirect(context.url);
  }
  res.write(baseTemplate.replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`));
  res.end();
});

console.log(`listening on ${port}`);
server.listen(port);
