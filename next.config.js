/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_REACT_URL: process.env.NEXT_PUBLIC_REACT_URL,
        NEXT_PUBLIC_BASE_URL_ACCOUNT: process.env.NEXT_PUBLIC_BASE_URL_ACCOUNT,
        NEXT_PUBLIC_REACT_URLdev: process.env.NEXT_PUBLIC_REACT_URL_DEV,
      }
}

module.exports = nextConfig
