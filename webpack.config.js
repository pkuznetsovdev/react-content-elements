const path = require("path");

const IS_DEVELOP = process.env.NODE_ENV === "development";
const IS_PRODUCTION = [ !IS_DEVELOP ].every(Boolean);
const PATHS = {
  source: path.resolve(__dirname, "src")
};

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: "./src/index.ts",
  output: {
    filename: "content-elements.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      name: "ContentElements",
      type: "umd"
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [ ".js", "jsx", ".ts", ".tsx" ]
  },
  devtool: IS_DEVELOP ? "source-map" : undefined
};