const express = require('express');
const middleware=require("../middleware");
const {Account}=require("../db");
const mongoose=require("mongoose");

const router = express.Router();


router.get("/balance", middleware, async (req, res) => {
    console.log(req.userId);
    const account = await Account.findOne({
        userId:req.userId
    });
   

    res.json({
        balance: account.balance
    })
});

router.post('/transfer', middleware, async (req, res) => {
    const transsession = await mongoose.startSession();
    transsession.startTransaction();
    const { amount, to } = req.body;
    const acc = await Account.findOne({
        userId: req.userId
    });
    
    try {
        if (!acc) {
            throw new Error("Account not found");
        }
    
        if (amount > acc.balance) {
            throw new Error("Insufficient balance");
        }
    
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(transsession);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(transsession);
    
        await transsession.commitTransaction();
        console.log("Transaction success");
    
        res.json({
            message: "Transaction completed Successfully"
        });
    } catch (error) {
        await transsession.abortTransaction();
        console.error("Error performing transaction:", error);
        
        res.status(400).json({
            error: error.message 
        });
    } finally {
        transsession.endSession();
    }
    
});

   


module.exports=router;