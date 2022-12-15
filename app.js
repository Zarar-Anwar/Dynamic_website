import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import { join } from "path"
import connectDb from './db/connect.js'
import detailModel from './models/detail.js'
import sliderModel from './models/slider.js'
import web from './routes/web.js'
import servicesModel from './models/services.js'
import contactModel from './models/contact.js'

const app=express()
const DATABASE_URL=process.env.DATABASE_URL

app.set('view engine','ejs')
app.use(express.static(join(process.cwd(),'public')))
app.use(express.urlencoded({extended:true}))

connectDb(DATABASE_URL)

// servicesModel.create({
//     icon:'fa-brands fa-facebook',
//     Title:'Instagram',
//     Paragraph:'we use Instagram Since 2016',
//     link:"http://localhost:8000",

// })

// sliderModel.create({
//     imageUrl:"images/pic.jpg",
//     Title:'Working',
//     doc:'We are Here to make Programs :',
//     class:'active'
// })

// detailModel.create({
//     brandName:"ZaaLa",
//     brandUrl:'http:// example',
//     link:[
//         {
//             label:'Home',
//             URL:'/'
//         },
//         {
//             label:'About',
//             URL:'/about'
//         },
//         {
//             label:'Contact',
//             URL:'/contact'
//         },
//         {
//             label:'Gallery',
//             URL:'/gallery'
//         }
//     ]
// })

app.use('/',web)


app.listen(process.env.PORT,(req,res)=>{
    console.log(`The Server is Running at http://localhost:${process.env.PORT}`)
})