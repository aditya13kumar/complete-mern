const express = require('express');
const authcontroller = require('../controller/auth.controller')

const router = express.Router();

//--> REGISTER USER, LOGIN USER, LOGOUT USER
router.post('/user/register',authcontroller.registerUser);
router.post('/user/login',authcontroller.loginUser);
router.post('/user/logout',authcontroller.logout);

//--> REGISTER FOOD PARTNER, LOGIN AND LOGOUT

router.post('/foodpartner/register',authcontroller.registerfoodPartner);
router.post('/foodpartner/login',authcontroller.loginfoodPartner);
router.post('/foodpartner/logout',authcontroller.logout);






module.exports = router;