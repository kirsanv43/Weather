var path = require("path")
var webpack = require('webpack');
var output = path.join(__dirname, './build');

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    modulesDirectories: ["node_modules","less"],
    extensions: ["", ".js", ".jsx"]
  },
  entry: [
    './app/App.jsx'
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
    },
    {
          test: /\.less$/,
          loader: "style!css!less"
        },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },{
      test: /\.ttf$/,
      loader: 'url?limit=100000'
    }]
  }
};
