import express from 'express';
const router = express();

import {getDeviceDetails,getDeviceDetailsById,getEwastesCategory,getSelectedCategoryWasteInfo,getAllDevices,updateDeviceInfo} from '../controllers/waste.controller.js'

router.get('/getEwastesCategory',getEwastesCategory);
router.post('/getSelectedCategoryWasteInfo',getSelectedCategoryWasteInfo);
router.post('/getDeviceDetails',getDeviceDetails);
router.post('/getDeviceDetailsById',getDeviceDetailsById);
router.get('/getAllDevices',getAllDevices);
router.put('/updateDeviceInfo',updateDeviceInfo);


export default router ;

