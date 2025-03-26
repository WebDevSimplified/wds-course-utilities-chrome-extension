const webpack = require("webpack")
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const srcDir = path.join(__dirname, "..", "src")

module.exports = {
  entry: {
    popup: path.join(srcDir, "entries/popup.tsx"),
    options: path.join(srcDir, "entries/options.tsx"),
    background: path.join(srcDir, "entries/background.ts"),
    content_script: path.join(srcDir, "entries/content_script.tsx"),
    iframe_script: path.join(srcDir, "entries/iframe_script.tsx"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background"
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /\.module\.s?(c|a)ss$/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": srcDir,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
  ],
}
