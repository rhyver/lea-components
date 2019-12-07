const path = require('path');

module.exports = {
	mode: 'production',
   entry: './src/index.ts',
   module: {
		rules: [
			{
					test: /\.(ts|tsx)$/,
					use: [{
						loader: 'ts-loader',
					}],
					exclude: /node-modules/,
					
         },
         {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto'
         },
			{
					test:/\.(s*)css$/,
					use:['style-loader',
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}]
			}
		]
   },
   resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
   }
}