const express=require('express');
const router=express.Router();

const authenticate=require('../middleware/authenticate');
require('../db/conn');
const ProjectData=require('../model/detailsprojectschema');

router.post('/projectpost',async (req,res)=>{

    const {title,subtitle,images,details1,details2,link}=req.body;
    if(!title || !subtitle || !details1 || !link ){
        return res.status(422).json({error:"Plz filled all the field"})
    }

    try{
        const DataExist=await ProjectData.findOne({title:title});
        if(DataExist){
            return res.status(422).json({error:"Content already Exist"});
        }else{
            const data=new ProjectData({title,subtitle,images,details1,details2,link});
        await data.save();

        res.status(201).json({message:"Posted new project sucessfully"});
        }
        
    }catch(err){
        res.status(404).json({
            message:"Error in posting",
            error:err
        })
    }
})

router.get('/allprojectdata',authenticate,async (req,res)=>{
    
    try{
        const datas=await ProjectData.find();
        if(datas){
            res.status(202).json(datas)
        }else{
            return res.status(422).json({error:"No any datas"});
        }
    }catch(err){
        res.status(404).json({
            message:"Error in Getting Projects",
            error:err
        })
    }
})


module.exports=router;