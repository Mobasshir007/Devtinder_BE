const express= require("express")
const app = express();

app.listen(777,()=>{
    console.log("Server is running on port 777");
    
})
app.use("/test/2",(req,res)=>{
    res.send("This is test 2")
})
app.use("/test",(req,res)=>{
    res.send("Hello world")
})
app.use("/",(req,res)=>{
    res.send("Home page")
})
