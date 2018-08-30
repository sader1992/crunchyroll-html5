const common = require('./userscript.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

common.plugins = [
  new UglifyJSPlugin(),
  ...common.plugins
];

common.mode = 'production';
common.devtool = false;
common.optimization.minimize = true;

module.exports = common;