import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors' ;
import cookieparser from "cookie-parser";
import DataBaseConnect from "./config/dbConnect.js";


import AuthRoutes from './routes/auth.routes.js'
import WasteRoutes from './routes/waste.routes.js'
import AdminRoutes from './routes/admin.routes.js'
import AppointmentRoutes from './routes/appointment.routes.js'
import CategoryRoutes from './routes/category.routes.js'
import EducationalPopupRoutes from './routes/educationalpopup.routes.js'

import { addUserToReq } from "./middleware/auth.middleware.js";



// configs
const app = express();
configDotenv() ;
DataBaseConnect(); //db connection.


// middlewares
app.use(cookieparser());
app.use(express.json()) ;
app.use(cors({origin: 'http://localhost:5173',credentials: true}));


// routes
app.use("/api/v1/auth",AuthRoutes);
app.use("/api/v1/waste",WasteRoutes);
app.use("/api/v1/admin",AdminRoutes);
app.use("/api/v1/appointment",AppointmentRoutes);
app.use("/api/v1/category",CategoryRoutes);
app.use("/api/v1/educationalPopup",EducationalPopupRoutes);




// listen
const PORT = process.env.PORT  ;
app.listen(PORT ,()=>{
    console.log(`listening to ${PORT}`) ;
})