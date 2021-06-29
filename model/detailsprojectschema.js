const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    images:[
        {
            image:{
                type:String
            }
        }
    ],
    details1:{
        type:String,
        required:true
    },
    details2:{
        type:String,
        
    },
    link:{
        type:String,
        required:true
    }
})

const   projectData=mongoose.model('projectDetail',ProjectSchema);

module.exports=projectData;