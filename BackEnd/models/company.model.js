import mongoose, { mongo } from "mongoose"
const companyschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        LOWERCASE:true,
        
    },
    description:{
        type:String,
        required:true,
    }, website:{
        type:String,
        required:true,
        unique:true,
    }, location:{
        type:String,
        required:true,
    }, logo:{
        type:String,
        required:true,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{timestamps:true})
export const company=mongoose.model('company',companyschema)