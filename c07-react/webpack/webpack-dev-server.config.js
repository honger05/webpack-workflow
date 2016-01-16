
var webpack = require('webpack')
var path = require('path')
var distPath = path.resolve(__dirname, 'dist')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    devServer: 'webpack/hot/dev-server',
    index: './src/app/components/index/index.js'
    // detail: './src/app/components/detail/detail.js'
  },
  output: {
    path: distPath,
    filename: './script/[name].bundle.js',
    chunkFilename: './script/[id].chunk.js'
  },

  // entry: [
  //   'webpack/hot/dev-server',
  //   './src/app/components/index/index.js'
  // ],
  //
  // output: {
  //   path: distPath,
  //   filename: './script/index.bundle.js'
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
    extensions: ['', '.js', '.json', '.coffee']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      hash: true,
      template: './src/tmpl/index.html',
      chunks: ['index'],
      inject: 'body'
    }),
    //
    // new HtmlWebpackPlugin({
    //   title: 'detail',
    //   filename: 'detail.html',
    //   hash: true,
    //   template: './src/tmpl/detail.html',
    //   chunks: ['detail'],
    //   inject: 'body'
    // }),

    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))

  ],
  module: {
    loaders: [
      // {
      //   test: /\.html$/,
      //   loader: 'html'
      // },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.css$/,
        loader: 'style!css'
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
