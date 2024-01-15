const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/gems",
          to: path.resolve(__dirname, "..", "build", "assets", "gems"),
        },
        {
          from: "src/assets/board",
          to: path.resolve(__dirname, "..", "build", "assets", "board"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    publicPath: "/",
    clean: true,
  },
};
