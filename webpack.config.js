const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: "source-map",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      use: ["style-loader", "css-loader", "sass-loader"],
      test: /.(css|sass|scss)$/,
    },
    {
      use: ["html-loader"],
      test: /\.html$/i,
    },
  ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5050,
    open: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
};