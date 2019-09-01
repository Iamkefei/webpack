let str  = require('./a.js');

console.log(str);

require('./index.css');

require('./style.less');

let fn = () => {
    console.log('log');
}
fn();

@log
class A{
    a = 1;
}

let a = new A();

console.log(a.a);
console.log(A.b)

function log(target) {
    target.b = 23;
}
