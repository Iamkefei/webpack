let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  optimization: {
    minimizer: [
        // new UglifyJsPlugin({
        //     cache: true,
        //     parallel: true,
        //     sourceMap: true
        // }),
        new OptimizeCss()
    ]
  },
  devServer: { // 开发服务器的配置
      port: 3000,
      progress: true,
      contentBase: './build',
      compress: true
  },
  mode: 'production',   // 模式 默认两种 production development
  entry: './src/index.js',  // 入口
  output: {
      filename: 'bundle.js',  //  打包后的文件名
      path: path.resolve(__dirname, 'build'),  // 路径必须是一个绝对路径
      // publicPath: 'http://47.98.177.32/'
  },
  plugins:[ // 数组 放着所有的webpack插件
     new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: 'index.html'
     }),
     new MiniCssExtractPlugin({
         filename: 'main.css'
     }),
     new webpack.ProvidePlugin({
         $: 'jquery'
     })
  ],
  externals: {
    jquery: "$"
  },
  module: { // 模块
     rules: [ // 规则 css-loader 连续 @import这种语法的
         // style-loader 他是吧css插入到head的标签中
         // loader的特点 希望单一
         // loader的用法 字符串只用一个loader
         // 多个loader需要[]
         // loader的顺序 默认是从右向左执行
         // loader还可以写成 对象方式
         {
           test: /\.html$/,
           use: 'html-withimg-loader'
         },
         {
           test:/\.(png|jpg|gif)$/,
           use: {
              loader: 'url-loader',
              options: {
                  limit: 1,
                  outputPath: 'img/',
                  publicPath: 'http://47.98.177.32/img/'
              }
           }
         },
         {
             test: /\.js$/,
             use: {
                 loader: 'eslint-loader',
                 options: {
                     enforce: 'pre'
                 }
             }
         },
         {
           test: /\.js$/,
           use: {
               loader: 'babel-loader',
               options: {
                   presets: [
                       '@babel/preset-env'
                   ],
                   plugins: [
                       ["@babel/plugin-proposal-decorators", { "legacy": true }],
                       ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                       "@babel/plugin-transform-runtime"
                   ]
               }
           },
           include: path.resolve(__dirname, 'src'),
           exclude: /node_modules/
         },
         {
             test: /\.css$/,
             use: [
                 MiniCssExtractPlugin.loader,
                 'css-loader',
                 'postcss-loader'
             ]
         },
         {
             test: /\.less$/,
             use: [
                 MiniCssExtractPlugin.loader,
                 'css-loader',
                 'postcss-loader',
                 'less-loader'
             ]
         }
     ]
  }
};
