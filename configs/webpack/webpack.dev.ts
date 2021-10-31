import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";
import WebpackDevServer from "webpack-dev-server";
import baseConfig from "./webpack.common";
import paths from "../paths";

// Need to declare the module webpack for getting type details correctly for webpack-merge v5
// See: https://github.com/survivejs/webpack-merge/issues/141
declare module "webpack" {
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}

const config: webpack.Configuration = webpackMerge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 5000,
    static: paths.build,
    compress: true,
    historyApiFallback: true
  }
});

export default config;
