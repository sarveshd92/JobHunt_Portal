import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { DB_Connect } from "./Util/DB_Connect.util.js";
import userrouter from "./Routes/user.routes.js"
import companyrouter from "./Routes/company.routes.js"
import jobrouter from "./Routes/job.routes.js"

import applicationrouter from "./Routes/application.routes.js"

dotenv.config({
  path: 'D:/Job Portal/JobHunt-Portal/BackEnd/.env' 
});
// console.log("heyy->>>",process.env)
const app = express();
const PORT = process.env.PORT||6000;
// console.log(PORT)

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

const CorsOption = {
  origin: ['http://localhost:1234'], // Allow only frontend origin
  methods: ['GET', 'POST','PUT'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type'],
  credentials: true,
              
};

app.use(cors(CorsOption));
app.use(cookieParser());


// API SETUP

app.use("/api/v1/user",userrouter)
app.use("/api/v1/company",companyrouter)
app.use("/api/v1/job",jobrouter)
app.use("/api/v1/application",applicationrouter)





app.listen(PORT, () => {
    DB_Connect()
  console.log(`Server is running on port ${PORT}`);
});

app.get("/home", (req, res) => {
  res.send("Hi buddy, request received");
});
