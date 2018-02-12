const dirVars = require('../base/dirVars.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const moduleConfig = {
	rules: [
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader",
				},
			],
			include: dirVars.srcDir,
			exclude: /node_modules/,
		},
		{
			test: /\.pug$/,
			use: [
				{
					loader: "pug-loader",
				},
			],
			include: dirVars.srcDir,
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 8192,
					name: 'static/imgs/[hash:8].[ext]',
					path: dirVars.distDir,
				},
			},
			include: dirVars.srcDir,
			exclude: /node_modules/,
		},
		{
			test: /\.(woff|woff2|svg|eot|ttf)$/,
			use: {
				loader: "file-loader",
				options: {
					name: 'static/fonts/[name].[hash:8].[ext]',
					path: dirVars.distDir,
				},
			},
			include: dirVars.srcDir,
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [
					{
						loader: "css-loader",
						options: {
							minimize: true,
						},
					},
					{
						loader: "postcss-loader",
					},
				],
			}),
			include: dirVars.srcDir,
			exclude: /node_modules/,
		}
	],
}

module.exports = moduleConfig
