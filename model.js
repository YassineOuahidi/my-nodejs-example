const orderList = [
    {
        _id: 1,
        name: "caffe",
        quantity: 1
    },
    {
        _id: 2,
        name: "Cappuccino",
        quantity: 10
    }
];


const getOrders = () => {
    return orderList;
}


const getOrder = (_id) => {
    return new Promise((resolve, reject) => {
        
        orderList.forEach(order => {
            if(_id == order._id){
                resolve(order);
            }
        });

        reject({message: "not found"});

    })
}

module.exports = {
    getOrders,
    getOrder
}