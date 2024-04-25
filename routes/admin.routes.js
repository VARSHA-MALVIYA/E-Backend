import express from 'express'
const router = express.Router() ;


import {addEwasteDetails,addCategory,bulkEwasteAdd,getUnapprovedOperators,approveOperator,contactUs} from '../controllers/user.controller.js'

router.post('/add_ewaste',addEwasteDetails);
router.post('/addCategory',addCategory);
router.post('/bulkEwasteAdd',bulkEwasteAdd);
router.put('/approveOperator',approveOperator);
router.get('/getUnapprovedOperators',getUnapprovedOperators);
router.post('/contactUs',contactUs);


export default router;