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
    publicPath: '/build/'
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  progress: true,
  module: {
    loaders: [{
      test: /\.js.*$/,
      loaders: ['react-hot','babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'app')
    }]
  }
};
