/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
    displayName: true,
    ssr: true,
  }
}

module.exports = nextConfig
