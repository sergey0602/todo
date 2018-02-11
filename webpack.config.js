const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const extractLESS = new ExtractTextPlugin({ filename: 'main.css' });

const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: extractLESS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        }),
      }
    ]
  },

  devServer: {
    compress: true,
    open: true,
    port: 8000
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './client/src/index.html'
    }),
    extractLESS
  ]
};

module.exports = config;
