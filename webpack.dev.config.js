const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(s*)css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "url-loader",
				options: {
					name: "assets/img/[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "assets/css/[name].css",
		}),
	],
};
*/