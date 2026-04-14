const express= require("express")
const app = express();

app.listen(777,()=>{
    console.log("Server is running on port 777");
    
})
app.use("/test/2",(req,res)=>{
    res.send("This is test 2")
})
app.get("/test",(req,res,next)=>{
    console.log("1st route");
    
    res.send("Hello world")
    next()
},
(req,res,next)=>{
    console.log("2nd route");
    
    res.send("2nd route handler")
})
app.use("/",(req,res)=>{
    res.send("Home page")
})
