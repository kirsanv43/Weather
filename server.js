var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");


config.entry.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  //contentBase: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
});

server.listen(8080,'localhost',function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
