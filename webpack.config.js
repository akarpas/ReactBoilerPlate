const path = require("path")

module.exports = {
  context: path.join(__dirname, "src/app"),
  entry: ["./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loader: "file-loader?publicPath=/"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")]
  }
}
