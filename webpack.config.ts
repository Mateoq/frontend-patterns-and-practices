import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: './src/main.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
};

export default config;
