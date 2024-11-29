const express = require("express")
const userRouter = express.Router()
const {Usersignup } = require("../controllers/user.controller")

userRouter.post("/signup", Usersignup)


module.exports = userRouter