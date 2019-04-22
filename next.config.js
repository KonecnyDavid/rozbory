const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@next/mdx')();

module.exports = withTypescript(withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname + "/src");
    return config;
  }
}));