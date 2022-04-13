const { getOrders, getOrder, updateOrder} = require("../model/order.js");

const orders = async (req, res) => {
    const orders = await getOrders();
    res.status(200).json(orders);
}

const order = async (req, res) => {
    const { _id } = req.params;
    try {
        const order = await getOrder(_id);
    
        res.status(200).json(order);
    } catch (err){
        res.status(500).json({message : err.message})
    }
}


module.exports = {
    orders,
    order
}