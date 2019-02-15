const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const Webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader']}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new VuetifyLoaderPlugin()
  ]
}