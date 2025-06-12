import { job } from "../models/job.model.js";
import { company } from "../models/company.model.js";
import { User } from "../models/user.model.js";
export const postjob=async(req,res)=>{
     try {
         const  userid=req.id;
              const finduser= await User.findOne({_id:userid});
            //   console.log(finduser)
         const{ title,
            description,
            requirement,
            salary,
            location,
            jobType,
            experience,
            noofposition,
            company,
            createdby}=req.body;
            // console.log(title,)
            // console.log(description,)
            // console.log(requirement,)
            // console.log(location,)
            // console.log(salary,)
            // console.log(jobType,)
            // console.log(noofposition,)
            // console.log(company,)
            // console.log(experience,)
            // console.log(createdby)
               if( 
                !title||
                !description||
                !requirement||
                !location||
                !salary||
                !jobType||
                !noofposition||
                !company){
                   return res.status(400).json({
                       message:"Something is missing",
                       success:false,
                   })
               }
   
         
   
          const result=await job.create({
           title,
           description,
           requirement,
           location,
           salary,
           jobType,
           experience,
           noofposition,
           company,
           createdby:userid,
          })
          if(result){
           return res.status(200).json({
               message:"job application created successfully",
               result,
               success:true,
           })
          }
     } catch (error) {
        return res.status(500).json({
            message:`Error-> ${error.message}`,
            success:false,
        })
     }
}



export const getalljobs=async(req,res)=>{
    try {
            const keyword=req.query.keyword||"";
            // console.log("yaha aatoh gaya")
            const search={
                $or:[{
                    title:{$regex:keyword,$options:"i"},
                },{
                    description:{$regex:keyword,$options:"i"},
                }]
            }
            const result=await job.find(search).populate('company').populate('createdby')
            
           
            if(!result){
                return res.status(400).json({
                    message:"No jobs found ",
                    success :false,
                })
            }
            //console.log(result)
            return res.status(201).json({
                message:"Jobs found",
                result,
                succes:true
            })



    } catch (error) {
        return res.status(500).json({
            message:`Error-> ${error.message}`,
            success:false,
        })
    }
}

export const getjobsbyid=async(req,res)=>{
   try {
 
   
    const companydata = await company.find({userid:req.id})
  console.log(companydata)
     const jobid=req.params.jobid;
     
            const result=await job.findOne({_id:jobid}).populate({
                path:'application',
                populate:'applicant',
                
            }).populate({path:'company',select:'name'})
            console.log(result.company.name)
            if(!result){
                return res.status(200).json({
                    message:"No jobs found entered id is incorrect",
                    success:false,
                })

            }
           const valid_company= companydata.filter((cc,idx)=>cc.name==result.company.name)
     console.log("company valid haii yaa nahii ",valid_company)
           if(valid_company.length!=0 ){
            return res.status(200).json({
                message:"job found",
                result,
                success:true,
            })}
            else{
                return res.status(400).json({
                message:"You haven't created this job No Authorizations",
                result:{},
                success:false,
            })}
            
   } catch (error) {
    // console.log(error.message)
    return res.status(500).json({
        message:`Error-> ${error.message}`,
        success:false,
    })
   }

}

//ADmin
export const getadmincreatedjobs=async(req,res)=>{
  try {
    const admin =req.id;
    // console.log(admin)
  const result=await job.find({createdby:admin})
//   .populate({path:'company'}).populate({path:'createdby'});
   
  if(!result){
    return res.status(200).json({
    message:"No jobs for company created by admin",
    success:false,
})  }
return res.status(200).json({
    message:"jobs found",
    result,
    success:true,
})
  } catch (error) {
    return res.status(500).json({
        message:`Error-> ${error.message}`,
        success:false,
    })
  }
  
}

export const appliedjobstatus=async(req,res)=>{
 try {
     const userid=req.id;
    //  console.log(req.id);
     
     const {jobid}=req.body;
    //  console.log(userid);
    //  console.log(jobid);
     const result=await job.findOne({"_id":jobid}).populate({
        path:'application',
        match:{applicant:userid}
     })
    //  console.log(result)
   
   
    return res.status(200).json({
       message:"appllied job status function",
       result,
       success:true
    })
   
 } catch (error) {
    return res.status(200).json({
        message:error.message,
        success:false
    })
 }
}



export const searchalljobs=async(req,res)=>{
    try {
            // const {search}=req.body
            // console.log("yaha aatoh gaya",req.body)
            const {keyword}=req.body
            // console.log(keyword)
            const search={
                $or:[{
                    title:{$regex:keyword,$options:"i"},
                },{
                    description:{$regex:keyword,$options:"i"},
                },{
                    requirement:{$regex:keyword,$options:"i"}
                }]
            }
            const result=await job.find(search).populate('company').populate('createdby')
            
           
            if(!result){
                return res.status(400).json({
                    message:"No jobs found ",
                    success :false,
                })
            }
            //console.log(result)
            return res.status(201).json({
                message:"Jobs found",
                result,
                succes:true
            })



    } catch (error) {
        return res.status(500).json({
            message:`Error-> ${error.message}`,
            success:false,
        })
    }
}
export const deletejobbyid=async(req,res)=>{

    try {
        const{jobid}=req.params;
        // console.log(jobid);
        const result=await job.deleteOne({$and:[{_id:jobid},{'createdby._id':req.id}]});
        // console.log(result)
            return res.status(200).json({
                message:"job deleted successfully",
                 result,
                success:true
            })
        
    } catch (error) {
        return res.status(400).json({
            message:`${error.message}`
        })
    }
}





export const getsearchjobs=async(req,res)=>{
    try {
            let keyword=req.query.keyword||"";
            //  console.log("yaha aatoh gaya",keyword)
             if(keyword){
                keyword=keyword.split(" ");
                keyword=keyword[0].toLowerCase();
             }
            //  console.log(keyword)
            const search={
                $or:[{
                    title:{$regex:keyword,$options:"i"},
                },{
                    requirement:{$regex:keyword,$options:"i"},
                }]
            }
            let  result=await job.find(search).populate('company').populate('createdby')
            
           
            if(result.length==0){
                
               
              
               
                return res.status(400).json({
                    message:"No jobs found ",
                    success :false,
                })
            
        
                 
            
            }
            //console.log(result)
            return res.status(201).json({
                message:"Jobs found",
                result,
                succes:true
            })



    } catch (error) {
        return res.status(500).json({
            message:`Error-> ${error.message}`,
            success:false,
        })
    }
}



export const getjobbyidbyuser = async (req,res)=>{

try {
    const {jobid}=req.params;
    console.log(jobid);
   

        const result=await job.findOne({_id:jobid}).populate({
                path:'application',
                populate:'applicant',
                
            }).populate({path:'company',select:['name','logo','-_id']})
 return res.status(200).json({
                message:"job found",
                result,
                success:true,
            })
 
} catch (error) {
     return res.status(500).json({
            message:`Error-> ${error.message}`,
            success:false,
        })
}


}