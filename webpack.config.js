var path = require("path")
var webpack = require('webpack');
var output = path.join(__dirname, './build');

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js", ".jsx"]
  },
  entry: [
    './app/main.js'
  ],
  output: {
    path: output,
    filename: 'bundle.js',
    publicPath: './build/'
  },
  watch: true,
  plugins: [],
  progress: true,
  module: {
    loaders: [{
      test: /\.js.*$/,
      loaders: ["babel-loader"],
      exclude: /node_modules/
    }]
  }
};
