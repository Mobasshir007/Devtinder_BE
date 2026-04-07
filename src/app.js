const express= require("express")
const app = express();

app.listen(777,()=>{
    console.log("Server is running on port 777");
    
})

app.use((req,res)=>{
    res.send("Hello worldasdhjk")
})