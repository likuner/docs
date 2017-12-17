var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	context: __dirname,
//	entry: [path.resolve(__dirname, './src/script/main.js'), path.resolve(__dirname, './src/script/a.js')], 
	entry: {
		main: path.resolve(__dirname, './src/script/main.js'),
		a: path.resolve(__dirname, './src/script/a.js'),
		b: path.resolve(__dirname, './src/script/b.js'),
		c: path.resolve(__dirname, './src/script/c.js')
	},
	output: {
		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name]-[chunkhash].js',
		filename: 'js/[name].js'
//		publicPath: 'http://cdn.com'
	},
	module: {
		loaders: [
			{test: /\.css$/,loader: 'style-loader!css-loader'}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, './dist/a.html'),
			template: path.resolve(__dirname, './index.html'),
//			inject: 'body',
			title: 'a.html',
			minify: {
//				removeComments: true,
//				collapseWhitespace: true
			},
//			chunks: ['main', 'a'],
			excludeChunks: ['b', 'c']
		}),
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, './dist/b.html'),
			template: path.resolve(__dirname, './index.html'),
			inject: 'body',
			title: 'b.html',
			chunks: ['b']
		}),
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, './dist/c.html'),
			template: path.resolve(__dirname, './index.html'),
			inject: 'body',
			title: 'c.html',
			chunks: ['c']
		})
	]
}
