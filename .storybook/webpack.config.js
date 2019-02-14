module.exports = (baseConfig, env, defaultConfig) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader.
  defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader");

  // use @babel/preset-react for JSX and env (instead of staged presets)
  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ];

  // use @babel/plugin-proposal-class-properties for class arrow functions
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties")
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  defaultConfig.resolve.mainFields = ["browser", "module", "main"];

  // Enable TypeScript with Babel loader & create-react-app preset.
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
