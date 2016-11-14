const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const entryPath = path.join(__dirname, './../src/index.js');
const buildPath = path.join(__dirname, './../build');
const publicPath = path.join(__dirname, './../public/assets');
const nodeModulesPath = path.join(__dirname, './../node_modules');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        entryPath
    ],
    output: {
        path: publicPath,
        publicPath: '/',
        filename: 'public/assets/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: nodeModulesPath
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }]
    },
    postcss: [
        autoprefixer({ browsers: ['> 5%', 'IE 10-11'] })
    ],
    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};