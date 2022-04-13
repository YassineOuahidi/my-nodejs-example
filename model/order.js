//CONSTANTS
const COLLECTION_NAME = 'orders';

const { ObjectId } = require('mongodb')
const { getCollection } = require('./db.js');


const getOrders = async () => {
    collection = await getCollection(COLLECTION_NAME);
    const orders = await collection.find({}).toArray();
    return orders;
}


const getOrder = async (_id) => {
    const collection = await getCollection(COLLECTION_NAME);
    const order = await collection.find({_id: new ObjectId(_id)}).toArray();
    return order;
}

const createOrder = async (order) => {
    const collection = await getCollection(COLLECTION_NAME);
    const order = await collection.insert(order).toArray();
    return order;
}

const deleteOrder = async (id) => {
    const collection = await getCollection()
    return collection.deleteOne({ _id: new ObjectId(id)});
}

const updateOrder = async (id, order) => {
    const collection = await getCollection(COLLECTION_NAME);

    const res = await collection.updateOne({
        _id: new ObjectId(id)
    }, {
        $set: {
            item: order.item,
            qty: order.qty,
            createdAt: Date.now()
        }
    });

    return res;

}


module.exports = {
    getOrders,
    getOrder,
    updateOrder,
    createOrder,
    deleteOrder
}