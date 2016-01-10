
var webpack = require('webpack')
var path = require('path')
var buildPath = path.resolve(__dirname, 'build')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(nodeModulesPath, 'react/dist/react.min.js')
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    // 'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/app/app.js')
  ],
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))

  ],
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   loader: 'react-hot',
      //   exclude: [nodeModulesPath]
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      },{
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },{
        test: /\.css$/,
        loader: 'style!css'
      },{
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.ttf$/,
        loader: 'url?limit=100000'
      }
    ]
  }
}
