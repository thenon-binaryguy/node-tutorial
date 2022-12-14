const express = require("express");

const app = express();
const prroute = require("./api/routes/products");


app.use("/product" , prroute ) ; 

module.exports = app ; 