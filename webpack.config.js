var path = require("path")
var webpack = require('webpack');
var output = path.join(__dirname, './build');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'client', 'api'),
      less: path.resolve(__dirname, 'client', 'less')
    },
    modulesDirectories: ["node_modules"],
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
      test: /\.less$/,
      loaders: ["style", "css", "less"]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=100000'
    }]
  }
};
