import mongoose from "mongoose"


const applicationschema=new mongoose.Schema({

    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true,
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    status:{
        type:String,
        enum:['Pending','Rejected','Accepted'],
    }
})
export const application=mongoose.model('application',applicationschema)