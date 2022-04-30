const { getOrders, getOrder } = require("../model/order.js");
const { addLinksToOrder, addLinksToOrders} = require("../linkHandlers/orderLinkHandler.js");

require('dotenv').config();




const orders = async (req, res) => {
    
    const orders = await getOrders();
    res.status(200).json(addLinksToOrders(orders));
}




const order = async (req, res) => {
    const { _id } = req.params;
    try {
        
        const order = await getOrder(_id);

        res.status(200).json(addLinksToOrder(order[0]));

    } catch (err){
        res.status(500).json({message : err.message})
    }
}


module.exports = {
    orders,
    order
}