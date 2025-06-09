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
    password:{
        type:String,
        required:true,
        minlength:[8,"password must be 8 chars long"],
       validate: {
      validator: function (value) {
        // Custom logic: must contain at least one uppercase, one lowercase, one digit, one special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      },
      message:
        "Password must be minimum 8 characters and include uppercase, lowercase, number, and special character."
    }
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