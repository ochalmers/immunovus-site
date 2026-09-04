import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        async redirects() {
          return [
            { source: "/approach", destination: "/discovery", permanent: true },
            { source: "/technology", destination: "/discovery", permanent: true },
            { source: "/applications", destination: "/discovery", permanent: true },
            { source: "/validation", destination: "/discovery/case-studies", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
