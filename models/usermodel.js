const mongoose = require("mongoose")

const userschme = mongoose.Schema({
    firstname:{type:String, trim:true,required:true},
    lastname:{type:String, trim:true, required:true},
    email:{type:String,trim:true, unique:true, required:true},
    password:{type:String,trim:true, required:true}
},{timestamps:true})

const usermodel = mongoose.model("user_collection" , userschme)


module.exports = usermodel