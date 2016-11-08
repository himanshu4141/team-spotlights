const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const entryPath = path.join(__dirname, 'src', 'index.js');
const buildPath = path.join(__dirname, '../build');
const publicPath = path.join(__dirname, '../public/assets');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: entryPath,
    output: {
        path: buildPath,
        publicPath: publicPath,
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: nodeModulesPath
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style?singleton', 'raw', 'postcss', 'sass']
        }]
    },
    postcss: [
        autoprefixer({ browsers: ['> 5%', 'IE 10-11'] })
    ]
};