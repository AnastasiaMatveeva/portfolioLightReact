require("@babel/polyfill");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    //точка входа куда будет собираться проект
    mode: "development", 
    entry: {
        main: [
                "@babel/polyfill",
                "./src/index.js",
              ]
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            inject: "body"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                              '@babel/preset-env', 
                              "@babel/preset-react"
                            ]
                }
            }
          },  
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.(svg|png|jpe?g|gif|pdf)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  limit: 100000
                }
              },
            ],
          }
        ],
      }
}
