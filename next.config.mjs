/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mercury/overview",
        permanent: true,
      },
      {
        source: "/:planet",
        destination: "/:planet/overview",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
