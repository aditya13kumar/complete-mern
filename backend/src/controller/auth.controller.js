const usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function registerUser(req,res){
    const {fullname,email,password} = req.body

    const isUseralreadyexist = await usermodel.findOne({
        email
    })

    if(isUseralreadyexist){
        return res.status(400).json({
            message:"user already register"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await usermodel.create({
        fullname, 
        email, 
        password:hashedPassword
    })
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        message:"user register succesfully",
        user:{
            id:user._id,
            email:user.email,
            fullname:user.fullname,
        }
    })
}

async function loginUser(req,res){


    const {email, password}= req.body

    const user = await usermodel.findOne({
        email
    })
    if(!user){
        res.status(400).json({
            message:"invalid email or password"
        })
    }

    const ispasswordvalid = await bcrypt.compare(password ,user.password);

    if(!ispasswordvalid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message:"login successfully",
        user:{
            name:user.fullname,
            email:user.email
        }
    })


}

module.exports ={registerUser,loginUser}