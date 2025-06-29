/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Mercury",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
