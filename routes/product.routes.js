import express from 'express'
const router = express.Router() ;


import {addProduct,getAllProducts} from '../controllers/product.controller.js'

router.post('/addProduct',addProduct);
router.get('/getAllProducts',getAllProducts);



export default router;