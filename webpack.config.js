module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true, // use client entry point so we can browse on localhost
    contentBase: "./dist", // where to serve content from
    port: 3000 //localhost:3000
  },
  module: { // instructions on how to transpile code that goes into bundle.js
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { // which presets to use to transpile
          presets: ['latest', 'stage-0']
        }
      }
    ]
  }// JSON files will work by default
}