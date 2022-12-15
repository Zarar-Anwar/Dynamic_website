import mongoose from "mongoose";

const contact=new mongoose.Schema({
    name:String,
    email:String,
    comment:String
})

const contactModel= mongoose.model('contact',contact)

export default contactModel