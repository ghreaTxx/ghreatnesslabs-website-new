/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // Add configuration to prevent chunk loading issues
  experimental: {
    esmExternals: 'loose'
  },
  // Ensure proper asset prefix for development
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  images: {
    domains: ['localhost', 'ghreatnesslab.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  webpack: (config, { dev, isServer }) => {
    // Handle special characters in paths
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
      }
    }
    
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    
    return config;
  },
}

module.exports = nextConfig