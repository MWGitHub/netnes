var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill' ,'./src/main.js'],
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.join('build', 'bundle.css'))
  ],
  devtool: 'source-map'
};
