const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack')
const webpack = require("webpack");
module.exports = {

  output: {
    path: path.join(__dirname, "build"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    }),

    new Dotenv({
      path: '.env.local',
      safe: false,
      silent: false,
      systemvars: true
    }),
    
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  module: {
      rules: [

        {
          test: /\.(jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
          },
        },

        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },

        {
          test: /\.css$/,
          use: ['style-loader', "css-loader",],
        },

        {
          test: /\.(png|jpg|pdf|woff|woff2|eot|ttf|svg|ico)$/,
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },

    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
}