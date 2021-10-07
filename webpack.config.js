const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'none',
  output: {
    path: __dirname,
    publicPath: '',
    filename: 'dist/main.js',
    library: { name: 'VueMapX', type: 'var' },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: ['.'],
    compress: true,
    port: 9000,
    open: true,
  },
  externals: {
    vue: 'Vue',
  },
};
