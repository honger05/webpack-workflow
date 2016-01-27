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
    lib: path.resolve(__dirname, "lib")
  },
  defaultPath: "http://www.yy.com/",
  cdn: "http://www.yy.com"
}

var route = [
  'index', 'detail'
]

var devConfig = {
  entry: {
    devServer: 'webpack/hot/dev-server',
    common: ['jquery', 'handlebars', 'utils']
  },
  output: {
    path: distPath,
    filename: './scripts/[name].bundle.js',
    chunkFilename: './scripts/[id].chunk.js'
  },

  // 页面中引入
  // externals: {
  //   'jquery': 'window.jQuery',
  //   '$': 'window.jQuery'
  // },

  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000
  },
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg"],
    alias: {
      'jquery': path.join(config.path.lib, '/jquery'),
      'handlebars': path.join(config.path.lib, '/handlebars'),
      'utils': path.join(config.path.lib, '/utils')
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
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel'
      // },
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
        loader: "url-loader?limit=1000&name=images/[name]-[hash:10].[ext]"
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html'
      // },
      {
        test: path.join(config.path.lib, '/jquery'),
        loader: 'expose?jQuery'
      },
      {
        test: path.join(config.path.lib, '/handlebars'),
        loader: 'expose?Handlebars'
      },
      {
        test: path.join(config.path.lib, '/utils'),
        loader: 'expose?Utils'
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
    filename: item + '.html',
    template: 'src/tmpl/' + item + '.html',
    hash: true,
    inject: 'body',
    chunks: [ item ]
  })

  devConfig.plugins.push(htmlPlugin)
})

module.exports = devConfig
