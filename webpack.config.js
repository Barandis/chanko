const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const banner = fs.readFileSync(path.resolve(__dirname, "LICENSE"), "utf8");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "chanko.js",
    library: "chanko",
    libraryTarget: "umd"
  },
  plugins: [new webpack.BannerPlugin({ banner, entryOnly: true })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, "src/modules/"),
      test: path.resolve(__dirname, "test"),
      index: path.resolve(__dirname, "src/index.js")
    }
  }
};
