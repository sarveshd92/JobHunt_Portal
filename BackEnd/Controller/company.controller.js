import { company } from "../models/company.model.js";
import { uploadOnCloudinary } from "../Util/cloudinary.util.js";

export const register=async(req,res)=>{
try {
    
     const{compName,logo,location,website,description}=req.body;
     const{userid}=req.id;
    
     console.log(req.body)
     if(!compName){
        return res.status(401).json({
            message:"please fill all the mandatory fields",
            success:false,
        })
     }
     const check1=await company.findOne({name:compName});
     if(check1){
        return res.status(401).json({
            message:"company already registered with this name",
            success:false,
        })
    }

    const result=new company({
       name:compName,logo,location,website,description
    })
    await result.save({validateBeforeSave:false})
    console.log("result from backend(comapny register",result)
   
        // const result= await company.create({
        //     name,logo,location,website,description,userid:req.id
        // },{validateBeforeSave:false})
       
        return res.status(201).json({
            message:"company created successfully",
            result,
            success:true,
        })
     
    
} catch (error) {
    return res.status(500).json({
        message:`${error.message}`,
        success:false,
    })
}

}

export const getcompany=async(req,res)=>{
      try {
         const result=await company.find();
         if(!result){
          return res.status(400).json({
              message:"no company listed",
              success:false,
          })
         }
         return res.status(200).json({
          result,success:true,
         })
      } catch (error) {
        return res.status(500).json({
            message:`${error.message}`,
            success:false,
        })
      }
      
}
export const getcompanybyid=async(req,res)=>{
   try {
     const {id}=req.params;
     console.log(req.params);
     console.log(id);
   const getcomapany= await company.findOne({_id:id})
   if(!getcompany){
     return res.status(400).json({
         messsage:"no company is listed by this user",
         success:true,
     })
   }
   return res.status(200).json({
     getcomapany,
     succcess:true,
   })
   } catch (error) {
    return res.status(500).json({
        message:`${error.message}`,
        success:false,
    })
   }
}

export const updatedetails=async(req,res)=>{
   try {
     const{name,description,location,website}=req.body;
     console.log("body",req.body)
       const to_update={name,description,location,website}
       console.log("id",req.id)
       
       console.log(req.params.id)
       console.log("files from update controller",req.file.path)
      
      if(req.file.path) {
        const datafile=await uploadOnCloudinary(req.file?.path)
                if(datafile){
                    to_update.logo = datafile.url; 
                    to_update.userid=req?.id
                  
                }}
     const isupdated=await company.findByIdAndUpdate(req.params.id,to_update,{new:true});
     if(!isupdated){
         return res.status(400).json({
             message:"not updated something went wrong / check id",
             success:false
         })
     }
     return res.status(201).json({
         message:"details updated successfully",
         success:true,
     })
   } catch (error) {
    return res.status(500).json({
        message:`${error.message}`,
        success:false,
    })
   }
}

export const deleteallbyid=async(req,res)=>{
           try {
             
             console.log(req.id);
             const data= await company.deleteMany({userid:req.id})
             console.log(data)
                const result=await company.find({userid:req.id})
             return res.status(200).json({
                message:"data deleted successfully",
                data,result,
                succes:true,
             })
           } catch (error) {
            return res.status(200).json({
                message:`Data not deleted ->${error.message}`,
                success:false,
            })
           }

}


export const getusercomp= async(req,res)=>{
   try {
     const id=req.id;
     console.log(id)
     if(!id){
        return res.status(200).json({
            message:"please login again",
            success:true,
        })
     }
     const result=await company.find({userid:id})
     if(result){
         return res.status(200).json({
                     message:"data retrieved successfully",
                     result,
                     success:true
         })
     }
     else{
         return res.status(200).json({
             message:"No Companies Found registered by Udser",
             success:false,
         })
     }
   } catch (error) {
    return res.status(500).json({
        message:`something went wrong ${error.message}`,
        success:true,
    })
   }
}



export const updatedetailsonly=async(req,res)=>{
    try {
      const{name,description,location,website}=req.body;
     
        const to_update={name,description,location,website}
     
        
        console.log(req.params.id)
       
       
     
      const isupdated=await company.findByIdAndUpdate(req.params.id,to_update,{new:true});
      if(!isupdated){
          return res.status(200).json({
              message:"not updated something went wrong / check id",
              success:false
          })
      }
      return res.status(201).json({
          message:"details updated successfully",
          success:true,
      })
    } catch (error) {
     return res.status(500).json({
         message:`${error.message}`,
         success:false,
     })
    }
 }