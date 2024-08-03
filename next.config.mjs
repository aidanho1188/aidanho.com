/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, {dev}) => {
    if (dev) {
      config.devtool = 'eval-source-map'
    } else {
      config.devtool = false
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'usm.maine.edu',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'media1.giphy.com',
      },
    ],
  },
}

export default nextConfig
