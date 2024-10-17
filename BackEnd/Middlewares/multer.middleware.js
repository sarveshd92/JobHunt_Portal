import multer from "multer";

const storage=multer.diskStorage(
{
   
    destination:function(req,file,cb){
        console.log("file aayi toh haiii->")
        cb(null,"D:/Job Portal/public/temp")
        
    },
    filename:function(req,file,cb){
     
       console.log(" filename set hoga aur type  check hogaa")
       console.log(file.originalname)
            cb(null,file.originalname)
        
       
    }
   
}
)

export const upload=multer({
    storage,
   // limits: { fileSize: 1024 * 1024 * 5 }  
})