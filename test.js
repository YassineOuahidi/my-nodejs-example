const model = require("./model.js");
const result = model.getOrders();
console.log(result);


const orderResult = model.getOrder(1);


orderResult.then(res => {
    console.log(res);
})