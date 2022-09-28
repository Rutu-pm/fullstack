const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  resolve: {
    symlinks: false,
  },
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
