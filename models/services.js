import mongoose from 'mongoose'

const services=new mongoose.Schema({
     icon:String,
     Title:String,
     Paragraph:String,
     links :String,
})

const servicesModel=mongoose.model('Services',services)

export default servicesModel