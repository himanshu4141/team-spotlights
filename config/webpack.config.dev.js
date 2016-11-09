const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const entryPath = path.join(__dirname, './../src/index.js');
const buildPath = path.join(__dirname, './../build');
const publicPath = path.join(__dirname, './../public/assets');
const nodeModulesPath = path.join(__dirname, './../node_modules');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: entryPath,
    output: {
        path: publicPath,
        publicPath: publicPath,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            },
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
    ]
};