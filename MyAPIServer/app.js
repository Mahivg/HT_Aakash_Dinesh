// const http = require('http');
const myExpress = require('express');
const bodyParser = require('body-parser');
const mongooseLib = require('mongoose');
const cors = require('cors');

const myAppRouters = require('./app-router');

const DB_CONNECTION_URL = 'mongodb+srv://magesh:Test123456@magesh01.m5trt.mongodb.net/shop';

const app = myExpress();

app.use(bodyParser.urlencoded({extended : true}));

app.use(myExpress.json());

app.use(cors());

app.use(myAppRouters);

mongooseLib.connect(DB_CONNECTION_URL)
            .then(client => {
                console.log(" Connected to Mongo DB");
                // console.log(client);
                app.listen(4000, () => {
                    console.log('Server Started at 4000..');
                });
            })
            .catch(err => console.log(err));




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
