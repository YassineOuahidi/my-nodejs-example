const express = require('express');

const router = express.Router();


const orderController = require('../controller/orderController.js')


// questo è come se fosse /orders/
router.get('/', async (req, res) => {
    const orders = await getOrders();
    res.status(200).json(orders);
});
//questo è come se fosse orders/:id
router.get('/:id', orderController.order);


module.exports = router;