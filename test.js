var order = {
    property1 : "value 1",
    property2 : "value 2"
}


var orderModified = {
    ...order,
    property3: "value 3",
    property1 : "modified"
}

console.log(orderModified);