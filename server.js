const dotenv = require("dotenv")
const express = require("express")
const connectdb = require("./config/db")
const routes = require("./routes/userRoutes")
const app = express()
app.use("/api",routes)
dotenv.config({quite:true})
connectdb()

app.get("/", (req,res)=>{
    res.send("Welcome")
})
const port = process.env.PORT || 4000

app.listen(port,()=>{

    console.log(`server is starting on ${port}`);

})

