// const http = require('http');
const myExpress = require('express');
const bodyParser = require('body-parser');
const myAppRouters = require('./app-router');

const app = myExpress();

app.use(bodyParser.urlencoded({extended : true}));

app.use(myExpress.json());

app.use(myAppRouters);

app.listen(4000, () => {
    console.log('Server Started at 4000..');
});


// const server = http.createServer((req, res) => {
//     if(req.url == '/') {
//         res.write('Welcome to MY server...');
//     }
//     if(req.url == '/products' && req.method == "GET") {
//         res.write('These are all my products');
//     }
//     if(req.url == '/products' && req.method == "POST") {
//         var myProduct = req.body;
//         res.write('These are all my products');
//     }
//     res.end();
// });
// server.listen(4000);
