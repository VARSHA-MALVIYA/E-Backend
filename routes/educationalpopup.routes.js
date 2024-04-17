import express from 'express';
const router = express();

import {addEducationalPopup,getAllEducationalPopupDetails} from '../controllers/educationalpopup.controller.js'

router.post('/addEducationalPopup',addEducationalPopup);


export default router ;

