import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import paths from "../paths";

const config: webpack.Configuration = {
  entry: {
    app: paths.src
  },
  
  target: "web",
  output: {
    filename: "[name].js",
    path: path.join(paths.build, paths.publicPath),
    publicPath: paths.publicPath,
    hashFunction: "sha256"
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: paths.nodeModules
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" }), new ForkTsCheckerWebpackPlugin()],
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  }
};

export default config;
