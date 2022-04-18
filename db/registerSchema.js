const db = require('mongoose');

const employe_schema = new db.Schema({
    fname:{
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    gmail:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    image:{
       type:String
    } 
})

module.exports = new db.model('employeeRegister', employe_schema);