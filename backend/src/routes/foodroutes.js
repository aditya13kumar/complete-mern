const express = require('express');
const foodcontrolller = require('../controller/food.controller')
const authmiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage:multer.memoryStorage()
})

router.post('/register/partner',authmiddleware.authfoodpartnermiddleware,upload.single("video"),foodcontrolller.createFood)

module.exports = router