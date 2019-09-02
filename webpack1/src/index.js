// webpack打包我们的图片
// 1) 在js中创建图片来引入
import logo from './logo.png';
let image = new Image();
image.src = logo;
document.body.appendChild(image);
// 2）在css引入 background('url')


// console.log(window.$)

// let str  = require('./a.js');
//
// console.log(str);
//
// require('./index.css');
//
// require('./style.less');
//
// let fn = () => {
//     console.log('log');
// }
// fn();
//
// @log
// class A{
//     a = 1;
// }
//
// let a = new A();
//
// console.log(a.a);
// console.log(A.b)
//
// function log(target) {
//     target.b = 23;
// }
