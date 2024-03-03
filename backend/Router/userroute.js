const express=require('express');
const user=express.Router();
const zod=require("zod");
const jwt=require("jsonwebtoken")
const {User,Account}=require('../db');
const SecretKey=require("../config");
const middleware=require("../middleware");

const userobj=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})

user.post('/signup',async (req,res)=>{
    const success=userobj.safeParse(req.body);
    if(!success)
    {
        res.status(411).json({
            message:"Input are wrong try after updating the input"
        })
    }
    const existinguser=User.findOne({
        username:req.body.username
    });
    if(!existinguser)
    {
       return res.json({
            message:"User Already exists try login"
        })
    }
    const user=await User.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
      return res.json({
        message:"User created"
    })

})

user.post('/signin',async (req,res)=>{
    const {username,password}=req.body;
    const validateuser=await User.findOne({
        username:username,
        password:password
    })
    if (validateuser) {
        const token = jwt.sign({
            userId: validateuser._id
        }, SecretKey);
      
  
        res.json({
            token: token
        })
        return;
    }

    res.json({
        Message:"Unvalid User "
    })
})
user.put('/editinfo',middleware,async (req,res)=>
{
    console.log(req.userId);
    await User.updateOne({_id :req.userId},req.body);

    res.status(400).json({
        message:"Updated successfully.!"
    })
})
user.get("/details",middleware,async(req,res)=>{
    const u=await User.findById(req.userId)
    res.json({
        username:u.username,
        firstname:u.firstname,
        lastname:u.lastname
    })

})

user.get("/bulk",middleware, async (req, res) => {
    const userId=req.userId;
    
    const filter = req.query.filter || "";

    const users = await User.find({
        $and: [
            {
                _id: { $ne: userId } 
            },
            {
                $or: [
                    {
                        firstname: {
                            "$regex": filter
                        }
                    },
                    {
                        lastname: {
                            "$regex": filter
                        }
                    }
                ]
            }
        ]
    });

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    })
})

module.exports=user;