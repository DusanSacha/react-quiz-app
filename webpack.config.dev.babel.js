import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:['css-loader'],
        }),
      },
    ],
  },    
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: 'body',            
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  devServer: {
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },      
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
};