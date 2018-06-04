const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: "file-loader",
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist')
  }
};
