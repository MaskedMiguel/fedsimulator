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
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

const publicPath = "/"
const publicUrl = ""
const env = getClientEnvironment(publicUrl)

module.exports = {
  devtool: "hidden-source-map",
  entry: [require.resolve("./polyfills"), require.resolve("react-error-overlay"), paths.appIndexJs,],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: "static/js/[name].[hash:8].js",
    chunkFilename: "static/js/chunk.[name].[hash:8].js",
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
  },
  resolve: {
    modules: ["node_modules", paths.appNodeModules,].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
    extensions: [".js", ".json", ".jsx",],
    alias: {
      "react-native": "react-native-web",
    },
    plugins: [new ModuleScopePlugin(paths.appSrc),],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css|scss$/, /\.json$/, /\.gif$/, /\.jpe?g$/, /\.png$/,],
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/,],
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
        test: /\.css$/,
        loader: "raw-loader",
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     from: paths.appPublic,
    //     to: "static/",
    //   },
    // ]),
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      logger(message) {
        if (message.indexOf("Total precache size is") === 0) {
          // This message occurs for every build and is a bit too noisy.
          return
        }
        if (message.indexOf("Skipping static resource") === 0) {
          // This message obscures real errors so we ignore it.
          // https://github.com/facebookincubator/create-react-app/issues/2612
          return
        }
        console.log(message)
      },
      minify: true,
      // For unknown URLs, fallback to the index page
      navigateFallback: publicUrl + "/index.html",
      // Ignores URLs starting from /__ (useful for Firebase):
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/,],
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/,],
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: "common",
      minChunks: 3,
    }),
  ],
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
  performance: {
    hints: false,
  },
}
