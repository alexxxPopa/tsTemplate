import * as webpack from 'webpack';
var path = require("path");

const config: webpack.Configuration = {
  entry: "./src/index.tsx", 
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test:  /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

export default config;