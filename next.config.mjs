/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  distDir: '.next',
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
    workerThreads: false,
    cpus: 1
  }
}

export default nextConfig
