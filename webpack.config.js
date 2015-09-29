var path = require('path');

module.exports = {
	// 'webpack/hot/dev-server',
	entry: [ path.resolve(__dirname, 'app/main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		  // {test: /\.(js|jsx)$/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!scss'},
      {test: /\.sass$/, loader: 'style!css!sass'},
      {test: /\.(tpl|ejs|handlebars)$/, loader: 'ejs'}
		]
	}

}