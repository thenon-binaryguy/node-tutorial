const express = require("express");
const morgan =  require("morgan");

const app = express();
const prroute = require("./api/routes/products");
const orroute = require("./api/routes/orders");

app.use(morgan("dev"));  
app.use("/product" , prroute ) ; 
app.use("/orders" , orroute ) ; 


// Error Handling
app.use((req,res,next) => {
    const error = new Error("Path Not Found");
    error.status = 404 ; 
    next(error);
});

app.use((req,res,next) => {
    res.status(error.status || 500) ; 
    res.json({
        error:{
            message : "error.message" 
        }
    });
});


module.exports = app ; 