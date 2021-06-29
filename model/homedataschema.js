const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DemoSchema = new mongoose.Schema({
    sequence:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    demoDetails:{
        type:String,
        required:true
    },
    flip:{
        type:String,
        required:true
    }
})

const DemoData=mongoose.model('demoData',DemoSchema);

module.exports=DemoData;