const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  assetPrefix: "/meetup",
  redirects: async () => [
    {
      source: "/cms",
      destination: "https://fusion-meetup-web.sanity.studio/",
      permanent: true,
    },
    {
      source: "/meetup/_next/:path*",
      destination: "/_next/:path*",
      permanent: true,
    },
  ],
};

module.exports = withBundleAnalyzer(nextConfig);
