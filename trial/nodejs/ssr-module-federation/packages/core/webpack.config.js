const { UniversalFederationPlugin } = require('@module-federation/node');
const { resolve } = require('node:path');
const { dependencies } = require('./package.json');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  name: 'core',
  mode: 'development',
  target: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  entry: './src/index.tsx',
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
      name: 'core',
      isServer: true,
      filename: 'remote-entry.js',
      library: { type: 'commonjs-module' },
      remotes: {
        say: 'say@http://localhost:8081/server/remote-entry.js',
      },
    }),
  ],
};
