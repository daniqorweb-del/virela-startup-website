import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/virela-startup-website"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_VIRELA_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
