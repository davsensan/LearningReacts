var webpack = require('webpack');

module.exports = {
    entry: "./components/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js"
    },
	plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/,
         options: {
           eslint: {
			failOnWarning: true,
			failOnError: true
			}
        }
       })
     ],
    module: {
			loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
		]
	}
}