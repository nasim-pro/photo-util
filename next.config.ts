import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: isProd ? "/utils" : "",
    assetPrefix: isProd ? "/utils/" : "", // Keep this as is
};

export default nextConfig;