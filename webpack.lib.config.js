const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


function config(env) {
  const packageName = env.pkg;
  const extractTextPlugin = new ExtractTextPlugin({ filename: 'index.min.css', allChunks: true });

  return {
    entry: path.resolve(__dirname, `./packages/${packageName}/src/index.js`),
    output: {
      path: path.resolve(__dirname, `./packages/${packageName}/dist/`),
      filename: 'index.min.js',
      library: `belongUI${packageName}`,
      libraryTarget: 'umd',
    },
    externals: /^(lodash|classnames|react|jquery|prop-types|react-dom|popper\.js|@belong-ui)/i,
    resolveLoader: {
      moduleExtensions: ['-loader'],
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-runtime',
            'transform-react-remove-prop-types',
            'add-react-displayname',
          ],
          presets: ['es2015', 'stage-0', 'react'],
        },
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: extractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css?minimize',
            },
            {
              loader: 'postcss',
              options: {
                plugins: [autoprefixer({ browsers: ['> 1%', 'last 2 versions'] })],
              },
            },
            {
              loader: 'sass',
              options: {
                outputStyle: 'compressed',
              },
            },
          ],
        }),
      }],
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: false, compress: { warnings: false, drop_console: true } }),
      extractTextPlugin,
    ],
  };
}

module.exports = config;
