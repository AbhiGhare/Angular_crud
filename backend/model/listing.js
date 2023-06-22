const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    // i:Number,
    name:{type:String},
    surname:{type:String}
});

module.exports = mongoose.model("Lists",listingSchema);