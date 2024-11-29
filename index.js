const  express = require("express")
const app = express()
const connect = require("./Dbconfig/dbconnect")
require("dotenv").config()
const userRouter = require("./Routes/user.route")

app.use(express.json())
app.use("/user", userRouter)








connect()
const port = 5007
app.listen(port,()=>{
   console.log(`app started at port ${port}`);
   
})