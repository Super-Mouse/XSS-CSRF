'use strict';

var name = 'es-2015';
var sayName = function sayName(name) {
    document.write('i am ' + name);
};

var obj = {
    x: 1,
    y: 2
};

/*post请求*/
fetch('/api/issues', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
}).then(function (res) {
    return res.json();
}).then(function (update) {
    console.log(update);
});

sayName(name);