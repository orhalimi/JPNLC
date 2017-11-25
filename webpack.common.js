const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: `${__dirname}/app/js/app.js`,
  },
  resolve: {
    alias: {
      app: `${__dirname}/app/js`,
      components: `${__dirname}/app/js/components`,
      conjuctionPractice: `${__dirname}/app/js/components/conjuctionPractice`,
      css: `${__dirname}/app/css`,
      assets: `${__dirname}/app/assets`,
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/build`,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new CleanWebpackPlugin(['build']),
  ],
};
