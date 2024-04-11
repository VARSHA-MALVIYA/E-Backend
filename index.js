import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors' ;
import cookieparser from "cookie-parser";
import DataBaseConnect from "./config/dbConnect.js";




// configs
const app = express();
configDotenv() ;
DataBaseConnect(); //db connection.


// middlewares
app.use(cookieparser());
app.use(express.json()) ;
app.use(cors());


// routes



// listen
const PORT = process.env.PORT  ;
app.listen(PORT ,()=>{
    console.log(`listening to ${PORT}`) ;
})