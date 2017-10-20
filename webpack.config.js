/**
 * Created by lantu on 2017/10/17.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname,'/src/js/index')
    ],
    output: {
        path: path.join(__dirname,'/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react','env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit:8192
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'react-news',
            inject: 'body',
            template: './src/index.html'
        })
    ]
}
