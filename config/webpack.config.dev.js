"use strict"

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin")
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin")
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin")
const getClientEnvironment = require("./env")
const paths = require("./paths")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const publicPath = "/"

const publicUrl = ""

const env = getClientEnvironment(publicUrl)

// https://github.com/vuejs/vue-loader/issues/666
process.noDeprecation = true

module.exports = {
  devtool: "cheap-module-source-map",

  entry: [require.resolve("./polyfills"), require.resolve("react-dev-utils/webpackHotDevClient"), paths.appIndexJs,],
  output: {
    path: paths.appBuild,

    pathinfo: true,

    filename: "static/js/bundle.js",

    chunkFilename: "static/js/[name].chunk.js",

    publicPath: publicPath,

    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/,],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },

          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              cacheDirectory: true,
            },
          },

          {
            test: /\.scss$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
              },
            ],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: "file?name=[name].[ext]",
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/,],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),

    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin(env.stringified),

    new webpack.HotModuleReplacementPlugin(),

    new CaseSensitivePathsPlugin(),

    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ],

  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },

  performance: {
    hints: false,
  },
}
