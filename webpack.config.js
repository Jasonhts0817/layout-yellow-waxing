// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const isProduction = process.env.NODE_ENV == "production";
const isLocal = process.env.NODE_ENV == "local";

const config = {
  entry: () => {
    return {};
  },
  optimization: {
    removeEmptyChunks: true,
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: false,
      inject: isLocal,
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new RemoveEmptyScriptsPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/css", to: "./css" },
        { from: "src/fonts", to: "./fonts" },
        { from: "src/images", to: "./images" },
        { from: "src/js", to: "./js" },
      ],
    }),
  ],
  target: "web",
};

if (isLocal) {
}
module.exports = () => {
  console.log(process.env.NODE_ENV);
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
