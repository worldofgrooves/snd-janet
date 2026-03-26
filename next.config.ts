import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: "/start",
        destination: "https://start.madebyplume.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
