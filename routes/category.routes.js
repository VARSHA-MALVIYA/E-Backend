import express from 'express';
const router = express();

import {getAllCategories} from '../controllers/category.controller.js'

router.get('/getAllCategories',getAllCategories);


export default router ;

