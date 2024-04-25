import express from 'express'
const router = express.Router() ;


import {makeOrder,getOrderByUserId} from '../controllers/order.controller.js'
import { addUserToReq } from '../middleware/auth.middleware.js';

router.post('/makeOrder',addUserToReq,makeOrder);
router.get('/getOrderByUserId',addUserToReq,getOrderByUserId);



export default router;