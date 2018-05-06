'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('styles/bundle.css');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (options) => {
  const dest = Path.join(__dirname, 'dist');

  let webpackConfig = {
    mode: options.mode,
    devtool: options.devtool,
    entry: [
      './src/scripts/index'
    ],
    output: {
      path: dest,
      publicPath:'http://localhost:1337/',
      filename: 'bundle.[hash].js'
    },
    resolve: {
      // you can now require('file') instead of require('file.js')
      extensions: ['.js', '.json']
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin([dest])
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
              }
            }
        },
        {
          test: /\.(jpg|png|svg|obj)$/,
          loader:'url-loader',
          options:{
            limit:1000
          },
          include:Path.join(__dirname, 'src/assets')
        }
      ]
      // loaders:[
      //   {
      //     test: /\.(jpg|png|svg)$/,
      //     loader: 'file',
      //     include: './path/to/images'
      //   }
      // ]
    }
    };

  if (options.isProduction) {
    webpackConfig.entry = ['./src/scripts/index'];

    webpackConfig.plugins.push(
      new UglifyJSPlugin({
        sourceMap: true,
      }),
      ExtractSASS
    );

    webpackConfig.module.rules.push({
      test: /\.s?css/i,
      use: ExtractSASS.extract(['css-loader?sourceMap=true&minimize=true', 'sass-loader'])
    });

  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

    webpackConfig.module.rules.push({
      test: /\.s?css$/i,
      use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
    }, {
      test: /\.js$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    });

    webpackConfig.devServer = {
      // contentBase: dest,
      contentBase: 'dest',
      
      hot: true,
      port: options.port,
      inline: true
    };
  }

  return webpackConfig;

};
