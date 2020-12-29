const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const fileName = (ext) =>
  isDevelopment ? `[name].${ext}` : `[name][contenthash].${ext}`;
const cssLoaders = (loader) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
  loader && loaders.push(loader);
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, `./src`),
  entry: { main: ['@babel/polyfill', './script.js'] },
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, `./dist`),
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, `./src/`),
      '@elements': path.resolve(__dirname, `./src/elements/`),
      '@helpers': path.resolve(__dirname, `./src/helpers/`),
      '@services': path.resolve(__dirname, `./src/services/`),
      '@stylesheets': path.resolve(__dirname, `./src/stylesheets/`),
      '@assets': path.resolve(__dirname, `./src/assets/`),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: fileName('css') }),
    new ESLintPlugin({ extensions: ['js'] }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ttf|woff)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
