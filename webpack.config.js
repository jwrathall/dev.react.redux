//for node
const path = require('path');

module.exports = {
    context: __dirname,                 // run from root dir, _dirname is node global variable
    entry: './js/ClientApp.jsx',        //beginning of project
    devtool: 'source-map',              //all source maps into production - if not there it'll show bundled code, shows pre transpiled code for debugging
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    }
  };
