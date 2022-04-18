const db = require('mongoose');
const url = "mongodb://localhost:27017/register";

db.connect(url,(res)=>{
    console.log("db is connected")
},(e)=>{
    console.log(e);
})