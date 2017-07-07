var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
//allow CORS in dev
  app.all("/api/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});
}
//SERVE REACT APPS
app.use(express.static(path.join(__dirname, 'dist')));
//SERVE API
var dotaAPI = require('./api/dotaAPI')
app.use('/api/dota', dotaAPI);
//HANDLING EXCEPTION
app.get('*', function (request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
