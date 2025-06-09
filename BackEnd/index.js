import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { DB_Connect } from "./Util/DB_Connect.util.js";
import userrouter from "./Routes/user.routes.js"
import companyrouter from "./Routes/company.routes.js"
import jobrouter from "./Routes/job.routes.js"
import http from "http"
import applicationrouter from "./Routes/application.routes.js"
import { Server } from "socket.io"
import   jwt  from "jsonwebtoken"
import { Message } from "./models/Message.model.js";
import { company } from "./models/company.model.js";
import { job } from "./models/job.model.js";
import { User } from "./models/user.model.js";
dotenv.config({
  path: 'D:/Job Portal/JobHunt-Portal/BackEnd/.env' 
});
// console.log("heyy->>>",process.env)
const app = express();
const PORT = process.env.PORT||7777;
// console.log(PORT)

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

const CorsOption = {
  origin: ['http://localhost:1234'], // Allow only frontend origin
  methods: ['GET', 'POST','PUT'], // Allow these HTTP methods
  // allowedHeaders: ['Content-Type'],
  credentials: true,
              
};
const server = http.createServer(app)
const io=new Server(server,{
  cors:{origin:'http://localhost:1234',credentials:true,methods:['GET','PUT','POST']}
})
io.use( async(socket, next) => {
  let token = socket.handshake.headers.cookie.split('token=');
  token=token?.[1]
  
  const user = await jwt.verify(token,process.env.TOKENONE)
  if (!user) return next(new Error("Unauthorized"));
  socket.user = user;
  next();
});
io.on('connection', (socket) => {
  // console.log('User connected:', socket?.user?.userid);

  // ✅ Handle send-message
 socket.on("join-room", async (roomId) => {
  socket.join(roomId);
  const messages = await Message.find({ room: roomId }).sort({ timestamp: 1 });
  socket.emit("previous-messages", messages); // Send messages to user
});

  // socket.on('send-message', (data) => {
    // const { room, message } = data;
     socket.on("send-message", async ({ room, message, senderId, receiverId }) => {
   if(senderId==""){
   
senderId= socket.user.userid

   }
     const saved = await Message.create({
       room:room, content:message, senderId:senderId , receiverId: receiverId});
    // console.log(`Message from ${socket.user.userid} to room ${room}:`, message);
    
    // Send to others in the room
    socket.to(room).emit('receive-message', message);
  });
 socket.on('user-typing', (room) => {
    socket.to(room).emit('user-typing', room);
  });

  // ✅ Handle disconnect
  socket.on('disconnect', () => {
    // console.log('User disconnected:', socket.user.userid);
  });
});








 
 


















app.use(cors(CorsOption));
app.use(cookieParser());


// API SETUP
app.get("/welcome",(req,res)=>{
  return res.status(200).json({success:true,message:"welcome user"})
})
app.use("/api/v1/user",userrouter)
app.use("/api/v1/company",companyrouter)
app.use("/api/v1/job",jobrouter)
app.use("/api/v1/application",applicationrouter)



app.use((err,req,res,next)=>{
  if(err){
    res.status(401).json({success:false,message:err.message||"Something went wrong. Please try again",data:null})
  }
})

server.listen(PORT, () => {
   try {
     DB_Connect()
   console.log(`Server is running on port ${PORT}`);
   } catch (error) {
    // console.log(error)
   }
});











