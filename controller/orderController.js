const { getOrders, getOrder } = require("../model/order.js");

var hateoas = require("hateoas")({baseUrl: "ciao"});

require('dotenv').config();

hateoas.registerLinkHandler("order", (order) => {
    var links = {
        "self": {
            "href": process.env.BASE_URL + "/orders/" + order._id,
            "method": "GET"
        }
    };
 
    return links;
});



const orders = async (req, res) => {
    const orders = await getOrders();
    for(let i = 0; i < orders.length; i++) {
        orders[i] = hateoas.link("order", orders[i]);
    }
    res.status(200).json(orders);
}

const order = async (req, res) => {
    const { _id } = req.params;
    try {
        
        const order = await getOrder(_id);
        res.status(200).json(hateoas.link("order", order[0]));

    } catch (err){
        res.status(500).json({message : err.message})
    }
}


module.exports = {
    orders,
    order
}