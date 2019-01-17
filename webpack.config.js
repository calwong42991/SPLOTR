// bring in path module
const path = require('path');

// bring in html webpack plug in
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './React-Client/src/index.jsx',
  output: {
    path: path.join(__dirname, '/React-client/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './React-client/dist/index.html'
    })
  ]
}