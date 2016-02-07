var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require("./webpack.config.js");
var webpackHotMiddleware = require('webpack-hot-middleware')
var express = require('express');

config.devtools = 'eval';
config.entry.unshift('webpack-hot-middleware/client');
var compiler = webpack(config);
var app = new express();

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3002, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 3002, 3002)
  }
})
// var compiler = webpack(config);
// var server = new webpackDevServer(compiler, {
//   hot: true,
//   historyApiFallback: true,
//   publicPath: config.output.publicPath,
// });
//
// server.listen(8080,'localhost',function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//
//   console.log('Listening at localhost:3000');
// });
