/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Test', // Replace with your GitHub repository name
  assetPrefix: '/Test', // Replace with your GitHub repository name

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
