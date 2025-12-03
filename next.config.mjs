/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/portfolio-v1',
  // assetPrefix: '/portfolio-v1/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig