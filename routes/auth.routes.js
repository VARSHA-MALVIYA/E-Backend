import express from 'express';
const router = express();

import {signupHandler,loginHandler} from '../controllers/auth.controller.js'

router.post('/signup',signupHandler);
router.post('/login',loginHandler);
// router.get('/logout',logoutHandler);

export default router ;

