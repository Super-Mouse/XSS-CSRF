import $ from 'jquery';
// require('jquery')
import Util from './module1';
let name = 'es-2015';
let obj = {
    x: 1,
    y:2
};

/*post请求*/
fetch('/api/issues', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
}).then(res=>{
    return res.json()
}).then(update=>{
    console.log(update)
    document.getElementById('XSS').innerHTML = update
});


Util.sayName(name);



// $('#btn')[0].onclick = function(){
//     let myDiv = $('#myDiv')[0];
//     myDiv.style.width = '0';
//     // cancelAnimationFrame(timer);
//     requestAnimationFrame(fn);
//
//
//     function fn(){
//         if(parseInt(myDiv.style.width) < 500){
//             myDiv.style.width = parseInt(myDiv.style.width) + 5 + 'px';
//             myDiv.innerHTML = parseInt(myDiv.style.width)/5 + '%';
//             requestAnimationFrame(fn);
//         }
//     }
// }