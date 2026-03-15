const mongoose = require('mongoose');

const fooditemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    foodpartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodPartner"
    }
})

const foodmodel = mongoose.model("fooditem",fooditemSchema);

module.exports= foodmodel