const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig,{
    mode:"development",
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
      ],
      devServer: {
        compress: true,
        inline: true,
        contentBase: './build',
        port: '8084',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
          'Access-Control-Allow-Credentials': 'true',
        },
      },
})