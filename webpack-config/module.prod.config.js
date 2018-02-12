const dirVars = require('./base/dirVars.config.js')
const moduleConfig = require('./inherit/module.config.js')

moduleConfig.rules.push({
	test: /\.js$/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ["env", "react"],
			plugins: ["transform-runtime"],
		},
	},
	include: dirVars.srcDir,
	exclude: /node_modules/,
})

module.exports = moduleConfig
