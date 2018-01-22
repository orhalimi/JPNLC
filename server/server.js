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
const ReactRouter = require('react-router');
const fs = require('fs');
const App = require('../app/js/App').default;
const bodyParser = require('body-parser');


const { StaticRouter, Router } = ReactRouter;
const port = 8080;
const baseTemplate = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf8');
const server = express();

// function router(req, res, next) {
//   const context = {
//     routes, location: req.url,
//   };
//   Router.create(context).run((Handler, state) => {
//     res.render('layout', {
//       reactHtml: React.renderToString(<Handler />),
//     });
//   });
// }

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next();
});
server.use(express.static(`${__dirname}/../build`));
server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  console.log(context);
  // React.createElement(
  //   StaticRouter, { location: reqUrl, context },
  //   React.createElement(App)
  // );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.status(context.statusCode || 200);
    res.write(baseTemplate.replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`));
    res.end();
  }
}
);

console.log(`listening on ${port}`);
server.listen(port);
