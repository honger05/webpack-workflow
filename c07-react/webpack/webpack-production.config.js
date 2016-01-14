

var webpack = require('webpack')
var path = require('path')
var buildPath = path.resolve(__dirname, 'build')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/app/components/index/index.js',
    detail: './src/app/components/detail/detail.js'
  },
  output: {
    path: buildPath,
    filename: './script/[name].bundle.js',
    chunkFilename: './script/[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('./style/[name].css'),

    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      hash: true,
      template: './src/tmpl/index.html',
      chunks: ['index'],
      inject: 'body'
    }),

    new HtmlWebpackPlugin({
      title: 'detail',
      filename: 'detail.html',
      hash: true,
      template: './src/tmpl/detail.html',
      chunks: ['detail'],
      inject: 'body'
    }),

    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))

  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },{
        test: /\.hbs$/,
        loader: 'handlebars'
      },{
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },{
        test: /\.ttf$/,
        loader: 'url?limit=100000'
      }
    ]
  }
}
