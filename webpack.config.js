const path = require('path');

module.exports =  {
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  }
};