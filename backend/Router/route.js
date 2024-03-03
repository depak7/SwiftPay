const express=require('express');
const userrouter=require('./userroute.js');
const acc=require('./accountroute.js');
const router=express.Router();

router.use("/users",userrouter)
router.use("/acc",acc);
module.exports=router;