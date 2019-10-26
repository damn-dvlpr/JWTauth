const express= require("express");
// const jwt=require("jsonwebtoken");
var jwt = require('jsonwebtoken');
const app=express();
app.get('/',(req,res)=>{
    res.render("index.ejs");
})
app.post('/posts',verifyToken,(req,res)=>{
    res.send("Secret Message");
});
app.post('/login',(req,res)=>{
    const user={
        id:1,
        name:"naimish",
        email:"naimishrastogi12@gmail.com"
    }
    jwt.sign({user:user},"coxefgu",(err,token)=>{
        res.json({token:token});
    })
});
function verifyToken(req,res,next){
    const bearerHeader=req.headers["connection"];
    if(typeof bearerHeader !== "undefined"){
        res.send("kuch nahi hoga");
    }
    else{

        res.send(403);
    }
};
app.listen(12000,()=>{
    console.log("listening on 12000");
})