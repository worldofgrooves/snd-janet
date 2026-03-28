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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://manuvi.studio https://*.vercel.app",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
