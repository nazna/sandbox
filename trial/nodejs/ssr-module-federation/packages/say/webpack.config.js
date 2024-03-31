const { UniversalFederationPlugin } = require('@module-federation/node');
const { resolve } = require('node:path');
const { dependencies } = require('./package.json');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  name: 'say',
  mode: 'development',
  target: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    path: resolve(__dirname, './dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new UniversalFederationPlugin({
      name: 'say',
      isServer: true,
      filename: 'remote-entry.js',
      library: { type: 'commonjs-module' },
      exposes: {
        './SayHello': './src/SayHello.tsx',
      },
      shared: {
        ...dependencies,
        react: { eager: true, singleton: true },
        'react-dom': { eager: true, singleton: true },
      },
    }),
  ],
};
