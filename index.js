const express = require('express');

const app = express();

const serverPort = process.env.port || 3000

// app.get("/")
app.get('/health-check',(req,res)=>{

    res.send({message:"Application is running", pid:process.pid})

});

app.listen(serverPort, ()=>{
    console.log("Port is running on "+ serverPort);
})