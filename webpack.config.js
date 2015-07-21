var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(css|less)$/,
      loader: ExtractTextPlugin.extract('style', 'css!less')
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    root: __dirname,
    alias: {
      STYLE: './common'
    }
  }
}
