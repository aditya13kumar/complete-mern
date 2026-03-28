const foodmodel = require('../models/fooditem.model');
const storageservices = require('../services/storage.service')

async function createFood(req,res){
  

    const fileUpload = await storageservices.uploadImg(
        req.file
    )
    console.log(fileUpload);

    res.status(201).json({
        message:"done baby!!",
        data:fileUpload
    })

}

module.exports = {
    createFood
}