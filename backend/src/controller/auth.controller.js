const usermodel = require('../models/user.model');
const foodPartnermodel = require('../models/foodPartner.model');
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

function logout(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"user logged out successfully"
    });
}

async function registerfoodPartner(req,res){
    const{businessname,contactemail,password,contactName,PhoneNumber,Address} = req.body;

    const isfoodpartnerexists = await foodPartnermodel.findOne({
        contactemail
    })

    if(isfoodpartnerexists){
        return res.status(400).json({
            message:"food partner already exists"
        })
    }

    const hashpassword = await bcrypt.hash(password,10);

    const foodPartner = await foodPartnermodel.create({
        businessname,
        contactemail,
        contactName,
        PhoneNumber,
        Address,
        password: hashpassword
    })

    const token = jwt.sign({
        id:foodPartner._id,

    },process.env.JWT_SECRET);

    res.cookie("token",token);
    res.status(200).json({
        message:"foodpartner register successfully!!",
        foodPartner:{
            id:foodPartner._id,
            businessname:foodPartner.businessname,
            contactName:foodPartner.contactName,
            Address:foodPartner.Address

        }
    })

}

async function loginfoodPartner(req,res){

    const {email,password}=req.body;

    const foodpartner =await foodPartnermodel.findOne({
        email
    })
    if(!foodpartner){
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const ispasswordvalid = await bcrypt.compare(password,foodpartner.password);

    if(!ispasswordvalid){
        return res.status(200).json({
            message:"Invalid email or password"
        })
    }
    const token = jwt.sign({
        id:foodpartner._id
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message:"logged in successfully",
        foodpartner:{
            id:foodpartner._id,
            name:foodpartner.name,
            contactName:foodpartner.contactName,
            Address:foodpartner.Address
        }
    })

}

function logoutfoodpartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"foodpartner logout successfully"
    })
}
module.exports ={registerUser,loginUser,logout,registerfoodPartner,loginfoodPartner,logoutfoodpartner}