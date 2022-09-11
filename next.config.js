/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  redirects: async () => [
    {
      source: "/cms",
      destination: "https://fusion-meetup-web.sanity.studio/",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
