var webpack = require('webpack');
var WebpackDevmiddleware = require('webpack-dev-middleware')
var config = require("../webpack.config.js");
var webpackHotMiddleware = require('webpack-hot-middleware')
var express = require('express');
import weather from './services/weather.js'
import path from 'path'



config.devtools = 'cheap-module-eval-source-map';
config.entry.unshift('webpack-hot-middleware/client');
//config.entry.unshift("webpack-hot-middleware?http://localhost:8080/", "webpack-hot-middleware/client");
var compiler = webpack(config);
var app = new express();
var port = 3000;

//
// var dev = new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(port+1, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }
//
//   console.log(`Listening at http://localhost:${port+1}/`);
// });

app.use(express.static(path.resolve('./static')));
app.use(WebpackDevmiddleware(compiler, {
  hot:true,
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get("/getWeather/:lat/:lng", function(req, res) {
  if (req.params.lat && req.params.lng) {
    var response = weather(req.params.lat, req.params.lng).then(resp => resp.json()).then(resp => {
      res.send(resp);
    });
  } else {
    return res.send(JSON.stringify({
      code: 500,
      message: 'lat or lng is undefined'
    }));
  }
})


app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname,'../index.html'))
});




app.listen(port, function(error) {
    if (error) {
      console.error(error)
    } else {
      console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
  })
