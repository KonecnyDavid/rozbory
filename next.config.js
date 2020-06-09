const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@next/mdx')();
const path = require("path");
const webpack = require('webpack')

const assetPrefix = '/rozbory'

module.exports = withTypescript(withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  assetPrefix: assetPrefix,
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname + "/src");
    config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
    )
    return config;
  }
}));