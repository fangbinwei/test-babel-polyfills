const path = require('path')
/** @type {import('webpack/types').Configuration} */
module.exports = {
  mode: "development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: (filepath) => {
          // only include @babel/runtime when the @vue/babel-preset-app preset is used
          if (filepath.includes(path.join("@babel", "runtime"))) {
            return false;
          }
          // Don't transpile node_modules
          return /node_modules/.test(filepath);
        },
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
