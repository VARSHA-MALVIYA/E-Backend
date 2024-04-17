import express from 'express'
const router = express.Router() ;


import {addAppointment,getAppointmentDetails,getAppointmentDetailsByTicketOrEmail,processAppointment} from '../controllers/appointment.controller.js';
import { addUserToReq } from '../middleware/auth.middleware.js';


router.post("/addAppointment",addAppointment);
router.post("/getAppointmentDetails",addUserToReq,getAppointmentDetails);
router.post("/getAppointmentDetailsByTicketOrEmail",getAppointmentDetailsByTicketOrEmail);
router.post("/processAppointment",processAppointment);


export default  router ;