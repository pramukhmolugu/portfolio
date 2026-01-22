// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  images: { unoptimized: true },
};
