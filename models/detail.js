import mongoose from "mongoose";

const detail=new mongoose.Schema({
    brandName:String,
    brandUrl:String,
    link:[
        {
            label:String,
            URL:String
        },
    ]
})
const detailModel=mongoose.model('Detail',detail)

export default detailModel
