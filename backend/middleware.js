const SecretKey=require('./config');
const  jwt=require("jsonwebtoken");

 function auth(req,res,next)
{
    const header=req.headers.authorization;
    if(!header)
    {
        return res.json({
            Message:"Yu dont have authorization"
        })
    }
 
    const token=header;
  
    try {
        const decoded = jwt.verify(token, SecretKey);
        req.userId = decoded.userId;
        console.log(decoded);
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};


module.exports=auth;
