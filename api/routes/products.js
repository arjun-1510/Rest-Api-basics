const express = require('express');
const router = express.Router();

router.get('/', (req, res,next) => {
    res.status(200).json({ 
        message: 'Handing Get Request to /products'
    })
});

router.post('/', (req, res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }


    res.status(201).json({ 
        message: 'Handing Post Request to /products',
        createdProduct: product
    })
});

router.get('/:productID',(req, res,next) => {
    const id = req.params.productID;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discover the special ID'
        });
    } else {
        res.status(200).json({
            message: 'You are passed ID'
        })
    }
})


router.patch('/:productID',(req, res,next) => {
    res.status(200).json({
        message:'Updated product:'
    });
});

router.delete('/:productID',(req, res,next) => {
    res.status(200).json({
        message:'delete product:'
    });
});

module.exports = router;