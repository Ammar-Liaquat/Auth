const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlenght:8
    }

})

module.exports = mongoose.model("user",userSchema)

