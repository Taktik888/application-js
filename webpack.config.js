const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename =(ext) => isDev ? ` [name].${ext}` : ` [name].[contenthash].${ext}`;

devtool: isProd ? false : 'source-map',

module.exports = 
{
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry:'./index.js',
    output: 
    {        
        path: path.resolve(__dirname, 'dist'),
        filename: `${filename('js')}`,
        publicPath: ''
		},
		devServer:
    {
      historyApiFallback: true, 
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      compress: true,
      hot: true,
      //target: isDev ? 'web':'buowserslist',
      port: 3001,
      overlay: 
      {
        warnings: true,
        errors: true
      },
    },
		plugins: [
			new HTMLWebpackPlugin(
				{
					template: path.resolve(__dirname, 'src/index.html'),
					filename: 'index.html',
					minify: 
					{
						collapseWhitespace: isProd
					}
				}
			),
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin(
				{
					filename: `${filename('css')}`,
				})
		],
		module: {
			rules: [
				{
					test: /\.html$/,
					loader: 'html-loader',
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/i,
					use: [ 
						MiniCssExtractPlugin.loader, 'css-loader'
				],
			},]
		}
	};