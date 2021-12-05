const express = require('express');
const router = express.Router();

router.get('/', (req, res,next) => {
    res.status(200).json({ 
        message: 'Handing Get Request to /products'
    })
});

router.post('/', (req, res,next) => {
    res.status(200).json({ 
        message: 'Handing Post Request to /products'
    })
});

module.exports = router;