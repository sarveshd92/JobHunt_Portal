import mongoose from "mongoose";
const jobschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        
    }, requirement:[{
        
        type:String,
        
        
    }], location:{
        type:String,
        required:true,
        
    }, salary:{
        type:Number,
        required:true,
        
    },
    jobType:{
        type:String,
        required:true,
        
    },
    experience:{
        type:String,
    },
    noofposition:{
        type:Number,
        required:true,
        
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true,
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"application",
    }]
},{timestamps:true})

export const job=mongoose.model('job',jobschema);