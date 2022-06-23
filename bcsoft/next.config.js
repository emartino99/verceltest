const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['bcsoftsrl.sharepoint.com'],
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
