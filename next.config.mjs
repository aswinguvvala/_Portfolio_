/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development optimizations
  reactStrictMode: true,
  
  // Webpack configuration for better development stability
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Optimize memory usage in development
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
      
      // Improve Hot Module Replacement
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      };
    }
    
    return config;
  },

  // Development server configuration
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      // Period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 60 * 1000,
      // Number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 5,
    },
  }),

  // Image optimization
  images: {
    domains: [],
    unoptimized: true, // Faster builds in development
  },

  // Experimental features for better performance
  experimental: {
    // Improve build performance
    optimizeCss: false, // Disable in development for faster builds
    // Better memory management
    workerThreads: false,
  },
};

export default nextConfig;
