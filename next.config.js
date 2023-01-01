/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imager.rubyhotel.city",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rubyhotel.city",
        port: "",
        pathname: "/**",
      }
    ]
  }
}

module.exports = nextConfig
