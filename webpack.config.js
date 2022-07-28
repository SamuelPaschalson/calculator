const path = require ('path');
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: '3001',
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
};