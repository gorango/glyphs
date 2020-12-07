const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = (env, argv) => ({
  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.js',
    main: './src/code.ts',
  },

  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: 'pug-plain-loader'
      },

      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, 'postcss-loader']
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },

  resolve: {
    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<div id="app"></div>',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new VueLoaderPlugin()
  ],

  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
})
