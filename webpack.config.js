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
  devServer: {
    port: 3000, // you can change the port
  },
    /*loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },*/

    module: {
        rules: [
            {
            test: /\.(jsx)$/, // .js and .jsx files
            exclude: /node_modules/, // excluding the node_modules folder
            use: {
                loader: "babel-loader",
            },
            },
            {
                test: /\.(js)$/,
                use: {
                    loader: "babel-loader",
                },
                },
            {
            test: /\.css$/, // styles files
            use: ['style-loader', "css-loader",],
            },
            {
            test: /\.(png|jpg|pdf|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
            loader: "url-loader",
            options: { limit: false },
            },
        ],
    },

    devServer: {
      historyApiFallback: true,
    },
}