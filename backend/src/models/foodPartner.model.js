const { Phone } = require('lucide-react');
const mongoose = require('mongoose');


const foodPartnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contactName:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const foodPartnermodel = mongoose.model("foodPartner",foodPartnerSchema);

module.exports = foodPartnermodel