import path from "path";
import fs from "fs";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const paths: { [pathName: string]: string } = {
  nodeModules: resolveApp("node_modules"),
  build: resolveApp("build"),
  dotenv: resolveApp(".env"),
  src: resolveApp("src"),
  types: resolveApp("node_modules/@types"),
  appTypes: resolveApp("src/@types"),
  publicPath: "/"
};

export default paths;
