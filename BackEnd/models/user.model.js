import mongoose from "mongoose"

const userschema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        // lowercase:true,
    },
    username:{
        type:String,
        required:true,
        // unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    password: {
    type: String,
    required: true,
  
  },
    phoneno:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        enum:['Student','Recruiter'],
        required:true,
    },
    Profile:{
        bio:{
            type:String,
            default:"",
            //lowercase:true,
        },
        skills:
        {
            type:[String],
            // required:true,
        },
        resume:{
            type:String,
           required:true,
        },
        profilephoto:{
            type:String,
            default:"",
        },
        resumeorgname:{
            type:String,
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'company',
        }
    }

},{timestamps:true})

export const User=mongoose.model('User',userschema);