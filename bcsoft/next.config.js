const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['bcsoftcorporatesite.azurewebsites.net'],
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
            // include: path.resolve(__dirname, 'src/assets/'), // new line
            use: [
              'svg-sprite-loader',
              // 'svgo-loader'
            ]
          }
          // {
          //   test: /\.svg$/,
          //   use: ['@svgr/webpack'],
          // }
        ]
      },
      // plugins: [
      //   ...config.plugins,
      //   new SpriteLoaderPlugin({
      //     plainSprite: true
      //   }),
      // ]
    };
  },
}

module.exports = nextConfig
// module.exports = {
//   reactStrictMode: true,
//   images:{
//     loader:'imgix',
//     path: "https://noop/"
//   },
// };