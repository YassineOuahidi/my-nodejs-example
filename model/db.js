const { MongoClient } = require('mongodb');
require('dotenv').config();

const dbName = 'greppi';
const url = process.env.MONGO_CONNECTION;

let client = null;


const getClient = async () => {
    if (client != null) 
        return client;

    client = new MongoClient(url);
    await client.connect();
    return client;
}


const getCollection = async (collectionName) => {
    clientDb = await getClient();
    const collection = await clientDb.db(dbName).collection(collectionName);
    return collection;
}



module.exports = {
    getCollection
}


