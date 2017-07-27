module.exports = {

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    path: 'public',
    filename: 'bundle.js'
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: 'babel-loader',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['react', 'es2015']
        }
      },{
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devtool: "eval-source-map"
}