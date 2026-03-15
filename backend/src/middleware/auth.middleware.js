const foodPartnermodel = require('../models/foodPartner.model');
const jwt = require('jsonwebtoken');

async function authfoodpartnermiddleware(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"login required!!"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnermodel.findById(decoded.id);

        req.foodPartner = foodPartner

        next()


    }catch(err){
        return res.status(401).json({
            message:"Inavlid token"
        })
    }
}

module.exports = {
    authfoodpartnermiddleware
}