const express = require("express");
const morgan =  require("morgan");

const app = express();
const prroute = require("./api/routes/products");
const orroute = require("./api/routes/orders");

mongoose.connect("mongodb+srv://mymongo:@cluster0.v11x5cl.mongodb.net/?retryWrites=true&w=majority")

const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Handling CORS requests 
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    //Before actual request , we have an options request sent to client
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT,PATCH,POST,GET,DELETE");
        return res.status(200).json({});
    }
    next();
});


  
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