module.exports = function (api) {
  api.cache(true);
  const presets = [
    ["@babel/preset-typescript"],
    [
      "@babel/preset-env",
      {
        corejs: { version: 3 },
        useBuiltIns: "entry",
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11",
        },
      },
    ],
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/transform-runtime"],
    ["transform-class-properties"],
  ];
  return {
    presets,
    plugins,
  };
};
