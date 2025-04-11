const webpack = require("webpack")
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const fs = require("fs")
const merge = require("merge")

const srcDir = path.join(__dirname, "..", "src")
const publicDir = path.join(__dirname, "..", "public")
const distDir = path.join(__dirname, "../dist")

module.exports = env => {
  const BROWSER = env && env.BROWSER ? env.BROWSER : "chrome"

  const commonManifestPath = path.join(publicDir, "common.manifest.json")
  const browserManifestPath = path.join(publicDir, `${BROWSER}.manifest.json`)
  const outputManifestPath = path.join(distDir, "manifest.json")

  if (!fs.existsSync(browserManifestPath)) {
    throw new Error(
      `Manifest file for '${BROWSER}' not found: ${browserManifestPath}`
    )
  }

  const commonManifest = JSON.parse(
    fs.readFileSync(commonManifestPath, "utf-8")
  )
  const browserManifest = JSON.parse(
    fs.readFileSync(browserManifestPath, "utf-8")
  )

  const finalManifest = merge.recursive(true, commonManifest, browserManifest)

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  fs.writeFileSync(outputManifestPath, JSON.stringify(finalManifest, null, 2))

  return {
    entry: {
      popup: path.join(srcDir, "entries/popup.tsx"),
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
        patterns: [
          {
            from: ".",
            to: "../",
            context: "public",
            globOptions: {
              ignore: ["**/*.manifest.json"],
            },
          },
          {
            from: "src/entries/*.css",
            to: "../css/[name][ext]",
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
  }
}
