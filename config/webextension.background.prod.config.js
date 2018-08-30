const common = require('./webextension.background.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

common.plugins = [
  new UglifyJSPlugin()
];

common.mode = 'production';
common.devtool = false;
common.optimization.minimize = true;

module.exports = common;