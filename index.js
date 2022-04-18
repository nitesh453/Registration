const express = require('express');
const register = require('./db/registerSchema')
require("./db/connection")
const app = express();
const path = require('path');
const upload = require('./public/uploads')

   
const Port = process.env.PORT || 4000;
// const static_path = path.join(__dirname,"../public")
// app.use(express.static(static_path));
// console.log( path.join(__dirname,"../public"));
// jo bhi keyword hai ap use use nhi kar skte as a variable ya use var bana hai
//const static_path

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
})
app.post('/register', upload.single('image'),  (req,res)=>{
    console.log(req.body.password);
    console.log(req.body.cpassword);
    console.log(req.file.filename);
   try {
       if (req.body.password === req.body.cpassword) {
        const  registeremp = new register({
            fname: req.body.firstname,
            lname: req.body.lastname,
            gmail: req.body.gmail,
            password:req.body.password,
            image:req.file.filename
        })
         registeremp.save();
       } else {
           res.send('password does,t match');
       }   
   } catch (error) {
       console.log(error);
   }
})

app.post('/register',(req,res)=>{
    const filename=req.file.filename;
 res.json({
            message:"Image Uploaded Successfully",
            filename:filename
        });
})
app.listen(Port,()=> {
    console.log("I am listen" +Port )
})