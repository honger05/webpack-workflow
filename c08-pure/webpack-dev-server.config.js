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
    pub: path.resolve(__dirname, "pub")
  },
  defaultPath: "http://www.honger05.com/",
  cdn: "http://www.honger05.com"
}

var route = ['button', 'form']

var devConfig = {
  entry: {
    devServer: 'webpack/hot/dev-server'
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
    port: 4000
  },
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg"],
    alias: {
      'jquery': path.join(config.path.src, '/libs/jq/jquery'),
      'utils': path.join(config.path.src, '/js/utils.js')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),

    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",
    //   filename: "scripts/common.js",
    //   chunks: route
    // }),

    new ExtractTextPlugin("./css/[name].css"),

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
        loader: "url-loader?limit=1000&name=img/[name]-[hash:10].[ext]",
        include: path.resolve(config.path.src)
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: path.join(config.path.src, 'libs/jq/jquery'),
        loader: 'expose?jQuery'
      },
      {
        test: path.join(config.path.src, 'js/utils'),
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
    title: item,
    hash: true,
    chunks: [item],
    inject: 'body'
  })

  devConfig.plugins.push(htmlPlugin)
})

console.log(devConfig)

module.exports = devConfig
