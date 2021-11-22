/** @type {import('next').NextConfig} */
const withYaml = require("next-plugin-yaml");
module.exports = withYaml({
  reactStrictMode: true /*,
  images: {
    loader: "imgix",
    path: process.env.IMGIX_DOMAIN
  },*/,
});
