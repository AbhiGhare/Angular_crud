const mongoose = require('mongoose');
const listSchema= mongoose.Schema({
    name:String,
    surname:String,
    age:Number,
    email:String,
    phone_number:String,
    DOB:String,
    city:String
    
});

module.exports= mongoose.model("list",listSchema);