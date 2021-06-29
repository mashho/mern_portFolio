const jwt =require('jsonwebtoken');
const User=require('../model/userschema');

const Authenticate=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifyToken=jwt.verify(token,process.env.Secret_KEY);

        const rootuser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootuser){throw new Error('User not found')};

        req.token=token;
        req.rootUser=rootuser;
        req.userID=rootuser._id;

        next()



    }catch(err){
        res.status(401).send("Unauthorized: No token provided")
        console.log(err);
    }
}

module.exports=Authenticate;