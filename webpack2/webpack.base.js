let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
// let CleanWebpackPlugin = require('clean-webpack-plugin');

// 1) cleanWebpackPlugin
// 2) copyWebpackPlugin
// 3) bannerPlugin
module.exports = {
    devServer: { // 开发服务器的配置
        port: 8080,
        progress: true,
        contentBase: './build',
        compress: true,
        // 3) 有服务端 不想用代理来处理  能不能再服务端中启动webpack

        // 2) 我们前端只想单纯的来模拟数据
        // before(app) {
        //     app.get('/user',(req, res)=> {
        //         res.json({name: '珠峰架构'})
        //     });
        // }
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {
        //             '/api': ''
        //         }
        //     }
        // }
    },
    entry: {
        home: './src/index.js'
    },
    module: {
      rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
              }
          }
      ]
    },
    resolve: {
      modules: [path.resolve('node_modules')],
      extensions: ['.js', '.css'],
      mainFields: ['style', 'main'],
      // alias: {  // 别名 vue vue.runtime
      //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
      // }
    },
    // devtool: 'eval-source-map',
    // 3） 不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',
    // watch: true,
    // watchOptions: {
    //   poll: 1000,
    //   aggregateTimeout: 500,     //防抖  我一直输入代码
    //   ignored: /node_modules/    //  忽略
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
           DEV: JSON.stringify('production'),
           FLAG: 'true'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]
}
