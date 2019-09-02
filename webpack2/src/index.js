import 'bootstrap'
import './index.css'

let url = '';
if(DEV === 'dev'){
    url = 'http://localhost:3000'
}else {
    url = 'http://www.zhufengpeixun.cn'
}
console.log(url);

// let xhr = new XMLHttpRequest();
// xhr.open('GET', '/user', true);
//
// xhr.onload = function () {
//     console.log(xhr.response)
// };
// xhr.send();
// console.log('home');
//
// class Log{
//     constructor() {
//         console.log(3)
//     }
// }
// let log  = new log();
