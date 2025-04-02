/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
    // rewrite
    {
        source: "/rewrite/:path*",
        destination: "https://httpbin.org/post",
    },
    ]
}

module.exports = nextConfig
