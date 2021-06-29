const express=require('express');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const authenticate=require('../middleware/authenticate');



require('../db/conn');
const User=require('../model/userschema');

// signup
router.post('/regist',async (req,res)=>{
    const {firstname,lastname,contact,email,password,confirmpassword}=req.body;
    if(!firstname || !lastname || !contact || !email || !password || !confirmpassword){
        return res.status(422).json({error:"Plz filled all the field"})
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }else if(password!=confirmpassword){
            return res.status(422).json({error:"Password are not matching"});
        }else{
            const user=new User({firstname,lastname,contact,email,password,confirmpassword});
        await user.save();

        res.status(201).json({message:"User registered sucessfully"});
        }
        
    }catch(err){
        res.status(404).json({
            message:"Error in registering",
            error:err
        })
    }
    
     
});

//router login
router.post('/login',async (req,res)=>{
    const {email , password}=req.body;
    console.log(email+"<-email password->"+password)
    if(!email || !password){
        return res.status(422).json({error:"Plz fill all the field"})
    }
    try{
        
        const userLogin=await User.findOne({email:email});
        
       
        if(userLogin){

            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token=await userLogin.generateAuthToken();
            console.log("token->"+token);


            res.cookie("jwt",token,{
                
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials"});
            }else{
                res.status(201).json({
                    message:"User SignIn successfully",
                    "userdetails":userLogin
                });
            }
        }else{
            res.status(400).json({
                message:"User Doen't Exist",
                error:"User Doesn't exist"
                
            });
        }


    }catch(err){
        res.status(400).json({
            message:"Problem in Fetching User",
            error:err
            
        });
    }
})

//contact
router.post('/contac',authenticate,async (req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name || !email || !message){
            return res.status(422).json({error:"Plz fill all the field"});
        }
        const userContact=await User.findOne({_id:req.userID});
        if(userContact){
            const userMessage=await userContact.addMessage(name,email,message);
            await userContact.save();
            res.status(201).json({message:"Message sent "});
        }
    }catch(err){
        res.status(404).json({
            message:"Error in Contacting",
            error:err
        })
    }
})

router.get('/logout',(req,res)=>{
    
    
    res.clearCookie('jwt',{path:'/'});
    res.status(200).send('User Logout');
    
})

//about
router.get('/abt',authenticate,(req,res)=>{
   
    res.send(req.rootUser);
})

//getData of user
router.get('/getdata',authenticate,(req,res)=>{
    
    res.send(req.rootUser);
})

module.exports=router;