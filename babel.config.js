module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@store": "./src/store",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
