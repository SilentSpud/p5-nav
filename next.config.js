/** @type {import('next').NextConfig} */
const withYaml = require("next-plugin-yaml");
module.exports = withYaml({
  reactStrictMode: true,
  generateBuildId: () => "build" /*
  images: {
    loader: "imgix",
    path: process.env.IMGIX_DOMAIN
  },*/,
});
