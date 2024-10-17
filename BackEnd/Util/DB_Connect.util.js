import mongoose from "mongoose";


export const DB_Connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log("Database not connected ->",error.message)
    }
}