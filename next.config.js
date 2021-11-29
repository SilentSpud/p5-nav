/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  generateBuildId: () => "build",
};
if (process.env.IMGIX_DOMAIN) {
  NextConfig.images = {
    loader: "imgix",
    path: process.env.IMGIX_DOMAIN,
  };
}
module.exports = NextConfig;
