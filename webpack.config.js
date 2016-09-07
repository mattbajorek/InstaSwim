var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './entry.js'
  ],
  output: {
    path: require('path').resolve('./public/assets/js/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "./jquery.min.js",
      jQuery: "./jquery.min.js",
      skel: "./skel.min.js"
    })
  ],
  module: {
    loaders: [
      // { // use ! to chain loaders
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { // inline base64 URLs for <=8k images, direct URLs for the rest
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
}
