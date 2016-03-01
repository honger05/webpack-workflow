var webpack = require('webpack')
var path = require('path')
var distPath = path.resolve(__dirname, 'dist')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  env: process.env.NODE_ENV,
  path: {
    src: path.resolve(__dirname, "src/www"),
    app: path.resolve(__dirname, "src/app"),
    dist: path.resolve(__dirname, "dist"),
    gallery: path.resolve(__dirname, "gallery")
  },
  defaultPath: "http://www.yy.com/",
  cdn: "http://www.yy.com"
}

var route = [
  'index', 'template'
]

var devConfig = {
  entry: {
    devServer: 'webpack/hot/dev-server',
    common: ['handlebars', 'common']
  },
  output: {
    path: distPath,
    filename: './scripts/[name].bundle.js',
    chunkFilename: './scripts/[id].chunk.js'
  },

  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 5000
  },
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg"],
    alias: {
      'jquery': path.join(config.path.gallery, '/lib/jquery'),
      'handlebars': path.join(config.path.gallery, '/lib/handlebars'),
      'hui': path.join(config.path.gallery, '/hui/hui'),
      'common': path.join(config.path.gallery, '/common/common')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      Handlebars: "handlebars"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "scripts/common.js",
      chunks: route
    }),

    new webpack.NoErrorsPlugin(),

    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))

  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer!less'
      },{
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },{
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      },{
        test: /\.(jpg|png|gif)$/i,
        loader: "url-loader?limit=1000&name=img/[name]-[hash:10].[ext]"
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.hbs$/,
        loader: path.resolve(__dirname, 'loaders/hbs-loader')
      },
      {
        test: path.join(config.path.gallery, '/lib/jquery'),
        loader: 'expose?jQuery'
      },
      {
        test: path.join(config.path.gallery, '/lib/handlebars'),
        loader: 'expose?Handlebars'
      },
      {
        test: path.join(config.path.gallery, '/common/common'),
        loader: 'expose?Cmn'
      },
      {
        test: path.join(config.path.gallery, '/hui/hui'),
        loader: 'expose?Hui'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
      }
    ]
  }
}

route.forEach(function(item) {
  devConfig.entry[item] = path.join(config.path.app, '/components/'+ item +'/'+ item +'.js')

  var htmlPlugin = new HtmlWebpackPlugin({
    scope: item,
    filename: item + '.html',
    template: 'src/tmpl/' + item + '.html',
    inject: 'body',
    chunks: [ item ]
  })

  devConfig.plugins.push(htmlPlugin)
})

module.exports = devConfig
