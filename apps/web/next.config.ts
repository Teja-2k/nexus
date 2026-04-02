import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@nexus/db", "@nexus/ai", "@nexus/ui", "@nexus/utils"],
};

export default nextConfig;
