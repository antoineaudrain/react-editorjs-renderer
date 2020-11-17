const webpack = require('webpack');
const { join } = require('path');

module.exports = {
  entry: join(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  // plugins: [
  //   new webpack.BannerPlugin({
  //     entryOnly: true,
  //     raw: true,
  //     banner: 'typeof window !== "undefined" &&'
  //   })
  // ],
  output: {
    path: join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'React EditorJS Renderer',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
};