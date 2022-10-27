const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: [
          {
            loader: "ts-loader",
            options: {
              projectReferences: true,
            },
          },
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-typescript",
                ["@babel/preset-env", { targets: { node: "8" } }],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  devServer: {
    open: true,
    hot: false,
    port: 8081,
    static: { directory: "./src" },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
