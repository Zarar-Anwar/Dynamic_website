 import mongoose from "mongoose";

 const slider=new mongoose.Schema({
    imageUrl:String,
    Title:String,
    doc:String,
    class:String
 })
 const sliderModel=mongoose.model('slider',slider)

 export default sliderModel