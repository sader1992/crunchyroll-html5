const common = require('./userscript.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { optimizeForProduction } = require('../build/webpack-prod.js');

optimizeForProduction(common);

common.plugins = [
  new UglifyJSPlugin(),
  ...common.plugins
];

module.exports = common;