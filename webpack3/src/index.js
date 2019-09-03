let button = document.createElement('button');
button.innerHTML = 'hello';
button.addEventListener('click',function() {
   import('./source.js').then(data => {
       console.log(data.default)
   })
});
document.body.appendChild(button);
