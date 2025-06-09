import mongoose from "mongoose";


export const DB_Connect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://dsarvesh92:5ZvloPsvXRPqTS03@sarvesh.j9g8q3d.mongodb.net")
        console.log("Database connected")
    } catch (error) {
        console.log("Database not connected ->",error.message)
    }
}