/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@fusion/ui"],
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

export default nextConfig;
