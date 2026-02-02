/** @type {import('next').NextConfig} */
const isExport = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
