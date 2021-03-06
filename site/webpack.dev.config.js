var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var port  = 9016;


module.exports = {
    PORT: port,
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './scripts/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            '__SHOW_DEV_TOOLS__': false,
            '__ENABLE_LOG__': true,
            'NODE_ENV': 'development',
            'process.env.NODE_ENV': '"development"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    }
};
