import express from 'express';
const router = express();

import {getDeviceDetails,getDeviceDetailsById,getEwastesCategory,getSelectedCategoryWasteInfo} from '../controllers/waste.controller.js'

router.get('/getEwastesCategory',getEwastesCategory);
router.post('/getSelectedCategoryWasteInfo',getSelectedCategoryWasteInfo);
router.post('/getDeviceDetails',getDeviceDetails);
router.post('/getDeviceDetailsById',getDeviceDetailsById);

export default router ;

