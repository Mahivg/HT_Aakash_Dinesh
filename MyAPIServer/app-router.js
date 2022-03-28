const express = require('express');

const router = express.Router();

const products = [
    {
        "name" : 'Product 1',
        "description" : "Test"
    }
];

router.get('/', (req, res) => {
    res.send('Welcome to my server');
});

router.get('/products', (req, res) => {
    console.log('I am inside post....');
    res.json(products);
});

router.post('/products', (req, res) => {
    console.log('I am inside post method....');
    console.log(req.body);
    var myNewPro = req.body;
    products.push(myNewPro);
    res.json('Product with Name ' + myNewPro.name + ' has been added');
});

module.exports = router;