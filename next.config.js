// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { i18n } = require('./next-i18next.config');


const nextConfig = {
  trailingSlash: true,
  env:{
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  poweredByHeader: false,
  images: {
    domains: ['i.imgur.com', 'www.google.com', 'imgur.com']
  },
  webpack: config => {
    config.module.rules.push({
      exclude: /node_modules/
    });

    return config;
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  // i18n
};

module.exports = nextConfig;
