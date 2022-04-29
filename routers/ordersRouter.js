const express = require('express');

const router = express.Router();


const orderController = require('../controller/orderController.js')


// questo è come se fosse /orders/
router.get('/', orderController.orders);
//questo è come se fosse orders/:id
router.get('/:_id', orderController.order);


module.exports = router;