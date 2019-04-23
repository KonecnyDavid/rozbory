const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@next/mdx')();
const path = require("path");

module.exports = withTypescript(withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname + "/src");
    return config;
  }
}));