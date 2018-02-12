const dirVars = require('./base/dirVars.config.js')
const moduleConfig = require('./inherit/module.config.js')

moduleConfig.rules.push({
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ["env", "react"],
			plugins: ["transform-runtime"],
			env: {
				development: {
					presets: ["react-hmre"],
				},
			},
		},
	},
	include: dirVars.srcDir,
	exclude: /node_modules/,
})

module.exports = moduleConfig
