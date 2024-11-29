const usermodel = require("../models/usermodel")


const Usersignup = async (req,res) =>{
  try {
    console.log(req.body);
    const {firstname , lastname,email, password} = req.body
    if (!firstname || !lastname || !email || !password) {
       res.status(401).send({message:"All fields are Mandatory", status:false})  
    }else{
      const newuser = await usermodel.create(req.body)
      if (newuser) {
         res.status(200).send({message:"Signup successful", status:true})  
      }
    }
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
        res.status(407).send({message:"Already exist user", status:false}) 
    }else{
        res.status(500).send({message:error.message, status:false})  
    }
    
  }
}


module.exports = {Usersignup}