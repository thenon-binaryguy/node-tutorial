const express = require("express");
const router = express.Router() ; 

router.get("/", (req,res,next) => {
    res.status(200).json({
        message: 'My requests'
    });

}); 
router.post("/", (req,res,next) => {
    res.status(200).json({
        message: 'My requests'
    });

});

router.get("/:id", (req,res,next) => {
    const pid = req.params.id ; 
    res.status(200).json({
        message: 'My requests',
        id : pid 
    });

}); 

module.exports = router ;  


