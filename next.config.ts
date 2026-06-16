import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages deployment
  output: "export",

  // GitHub Pages serves from /iamoneself-public-preview/ subpath
  // For local dev, this is ignored; for production build, assets resolve correctly
  basePath: process.env.NODE_ENV === "production" ? "/iamoneself-public-preview" : "",

  // Disable image optimization (incompatible with static export)
  images: {
    unoptimized: true,
  },

  // Trailing slashes for clean GitHub Pages URLs
  trailingSlash: true,
};

export default nextConfig;
