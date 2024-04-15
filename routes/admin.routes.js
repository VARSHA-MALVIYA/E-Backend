import express from 'express'
const router = express.Router() ;

// const {addUserToReq,isAdmin} = require('../middlewares/auth') ;


import {addEwasteDetails,addCategory,bulkEwasteAdd} from '../controllers/user.controller.js'

router.post('/add_ewaste',addEwasteDetails);
router.post('/addCategory',addCategory);
router.post('/bulkEwasteAdd',bulkEwasteAdd);




export default router;