const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
app.set('port', process.env.PORT || 8080);

const compiler = webpack(webpackDevConfig);
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackDevConfig.output.publicPath,
	filename: webpackDevConfig.output.filename
}));

app.use(webpackHotMiddleware(compiler));
// app.use('/public/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log('Server is running on port ' + app.get('port'));
});