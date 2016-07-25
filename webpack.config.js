var path = require("path")
var webpack = require('webpack');
var output = path.join(__dirname, './build');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'client', 'api'),
      style: path.resolve(__dirname, 'client', 'style')
    },
    modulesDirectories: ["node_modules", "client"],
    extensions: ["", ".js", ".jsx"]
  },
  entry: [
    './client/App.jsx'
  ],
  output: {
    path: output,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  watch: true,
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  progress: true,
  module: {
    loaders: [{
      test: /\.js.*$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=100000'
    }]
  }
};
