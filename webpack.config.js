var path = require('path');

module.exports = {
	// 'webpack/hot/dev-server',
	entry: [ path.resolve(__dirname, 'app/main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	}
}