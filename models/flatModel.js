const mongoose = require("mongoose");
const flatschema = new mongoose.Schema({
    flatNumber: {
        type: String,
        required: true,
        unique: true
    },
    block: {
        type:String,
        required: true
    },
    floor: {
        type : Number,
        required: true
    },
    residentcount:{
        type:Number,
        default:1
    }
},{timestamps:true});
module.exports = mongoose.model("Flat",flatschema)