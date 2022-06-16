const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    return {
      ...config,
      module:{
        ...config.module,
        rules:[
          ...config.module.rules,
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          }
        ]
      }
    };
  },
}

module.exports = nextConfig
