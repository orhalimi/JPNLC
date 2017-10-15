const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: `${__dirname}/app/index.jsx`,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: 'transformed.js',
    path: `${__dirname}/build`,
  },
  plugins: [HTMLWebpackPluginConfig],
};
