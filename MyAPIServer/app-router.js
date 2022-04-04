const express = require('express');
const Product = require('./Schemas/product');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to my server');
});

router.get('/products', (req, res) => {
    console.log('I am inside Get Call....');
    Product.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.log(err));
});

router.get('/products/:id', (req, res) => {
    console.log('I am inside Get Call....');
    const productId = req.params.id;
    Product.findById(productId)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.log(err));
});

router.post('/products', (req, res) => {
    console.log('I am inside Post Call....');

    const prod = new Product({
        name: req.body.name,
        shortDescription : req.body.shortDesc,
        longDescription: req.body.longDesc,
        imageUrls: req.body.imageUrls,
        active: req.body.active
    });

    // prod mongo db schema object

    prod.save()
        .then(ress => {
            console.log(ress);
            res.json(ress);
        })
        .catch(err => {
            console.log(err);
        });

    // console.log('I am inside post method....');
    // console.log(req.body);
    // var myNewPro = req.body;
    // products.push(myNewPro);
    // res.json('Product with Name ' + myNewPro.name + ' has been added');
});

module.exports = router;