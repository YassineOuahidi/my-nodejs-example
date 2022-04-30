require('dotenv').config();

const addLinksToOrder = (order) => {

    var orderLink = getOrderLink(order);
    var links = {
        "self": {
            "href": orderLink,
            "method": "GET"
        },
        "update": {
            "href": orderLink,
            "method": "PUT"
        },
        "delete": {
            "href": orderLink,
            "method": "DELETE"
        }
    };

    order["links"] = links;
    return order;
}

const addLinksToOrders = (orders) => {
    
    for (let i = 0; i< orders.length; i++) {
        orders[i] = {
            ...orders[i],
            links : getOrderLink(orders[i])
        }
    }

    return {
        data : orders,
        links: {
            add : {
                href : process.env.BASE_URL + "/orders/",
                method: "POST"
            }
        }
    }
}

function getOrderLink(order) {
    return process.env.BASE_URL + "/orders/" + order._id;
}

module.exports = {
    addLinksToOrder,
    addLinksToOrders
}