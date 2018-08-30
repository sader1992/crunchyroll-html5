const webpack = require('webpack');

/**
 * @param {webpack.Configuration} common 
 * @return {webpack.Configuration}
 */
exports.optimizeForProduction = function(common) {
  common.mode = 'production';
  common.devtool = false;
  common.optimization.minimize = true;

  return common;
};