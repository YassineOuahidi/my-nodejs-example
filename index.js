const express = require('express');
const app = express();
const orderRouter = require('./routers/ordersRouter.js');
const port = 3000;

app.use(express.json());

app.use("/orders", orderRouter);

app.listen(port, () => {
    console.log("sono partito");
});