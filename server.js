const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));

//处理post请求中req.body
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();





let obj1 = {
    x: {
        a:1,
        b:2
    },
    y: 3
};
let arr = [1, 2, 3];

app.get('/', (req, res)=>{
    res.type('text/plain');
    res.send('Home');
});

app.get('/about', (req, res)=>{
    res.type('text/plain');
    let s = '';
    for (let name in req.headers){
        s += name + ': ' + req.headers[name] + '\n';
    }
    
    // res.send(s);
    res.send(req.ip);
});

app.listen(3000, function () {
    console.log('成功');
    console.log(__dirname);
});


app.post('/api/issues', jsonParser, (req, res)=>{
    req.body.z = 3;
    res.json(req.body);
});