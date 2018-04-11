let name = 'es-2015';
const sayName = (name)=>{
    document.write('i am ' + name)
};

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
}).then(res=>res.json()).then(update=>{
    // console.log(update)
});


sayName(name);