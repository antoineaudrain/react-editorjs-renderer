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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  output: {
    path: join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'React EditorJS Renderer',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
};