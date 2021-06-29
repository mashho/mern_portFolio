const express=require('express');
const router=express.Router();

const authenticate=require('../middleware/authenticate');
require('../db/conn');
const DemoData=require('../model/homedataschema');

router.post('/demoPost',async (req,res)=>{

    const {sequence,title,subtitle,image,demoDetails,flip}=req.body;
    if(!sequence || !title || !subtitle || !image || !demoDetails || !flip){
        return res.status(422).json({error:"Plz filled all the field"})
    }

    try{
        const DataExist=await DemoData.findOne({title:title});
        if(DataExist){
            return res.status(422).json({error:"Content already Exist"});
        }else{
            const data=new DemoData({sequence,title,subtitle,image,demoDetails,flip});
        await data.save();

        res.status(201).json({message:"Posted new content sucessfully"});
        }
        
    }catch(err){
        res.status(404).json({
            message:"Error in posting",
            error:err
        })
    }
})

router.get('/alldemodata',async (req,res)=>{
    
    try{
        const datas=await DemoData.find();
        if(datas){
            res.status(202).json(datas)
        }else{
            return res.status(422).json({error:"No any datas"});
        }
    }catch(err){
        res.status(404).json({
            message:"Error in getting all demos",
            error:err
        })
    }
})


module.exports=router;