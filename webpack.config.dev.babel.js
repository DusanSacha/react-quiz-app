import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/client/index.js',
  output: {
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
    {
      test: /\.js?/,
      exclude: /(node_modules)/,
      enforce: 'pre',
      use: [{
          loader: 'eslint-loader',
          options: { emitWarning: true },
        }],
    },          
    {
      test: /\.js?/,
      exclude: /(node_modules)/,
      use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015'] },
        }],
    },
  ],
  },    
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/client/index.html',
    inject: 'body',            
  }),
  ],
  devServer: {
    historyApiFallback: true,
    overlay: {
    errors: true,
    warnings: true,
  },      
    proxy: {
    "/api": "http://localhost:8000",
  },
  },
};