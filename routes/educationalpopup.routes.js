import express from 'express';
const router = express();

import {addEducationalPopup,getAllEducationalPopupDetails,updateEducationalPopup} from '../controllers/educationalpopup.controller.js'

router.post('/addEducationalPopup',addEducationalPopup);
router.get('/getAllEducationalPopupDetails',getAllEducationalPopupDetails);
router.put('/updateEducationalPopup',updateEducationalPopup);


export default router ;

