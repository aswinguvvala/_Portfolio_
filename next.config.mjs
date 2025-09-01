/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Production optimizations for Vercel
  ...(process.env.NODE_ENV === 'production' && {
    // Enable SWC minification for better performance
    swcMinify: true,

    // Optimize build output
    output: 'standalone',

    // Image optimization settings
    images: {
      domains: ['localhost'],
      unoptimized: false, // Enable optimization in production
      formats: ['image/webp', 'image/avif'],
    },

    // Experimental features
    experimental: {
      scrollRestoration: true,
    },
  }),

  // Development settings
  ...(process.env.NODE_ENV === 'development' && {
    images: {
      unoptimized: true, // Faster builds in development
    },
  }),

  // Webpack configuration
  webpack: (config, { dev }) => {
    if (!dev) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            framermotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
