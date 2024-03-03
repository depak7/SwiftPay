const express = require('express');
const app=express();
const mainrouter=require("./Router/route")
const cors=require("cors");
app.use(cors());
app.use(express.json())

app.use('/api/v1',mainrouter);

app.listen(3000,function(){
    console.log("Server Started")
})