var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require("../webpack.config.js");
var webpackHotMiddleware = require('webpack-hot-middleware')
var express = require('express');
import weather from './services/weather.js'
import path from 'path'



config.devtools = 'cheap-module-eval-source-map';
config.entry.unshift('webpack-hot-middleware/client');
var compiler = webpack(config);
var app = new express();
var port = 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname,'../index.html'))
})

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

app.listen(port, function(error) {
    if (error) {
      console.error(error)
    } else {
      console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
  })
