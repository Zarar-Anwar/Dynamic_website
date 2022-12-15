import contactModel from "../models/contact.js"
import detailModel from "../models/detail.js"
import servicesModel from "../models/services.js"
import sliderModel from "../models/slider.js"


class mainClass{
   
//    HOME CONTROLLER 

    static home=async(req,res)=>{
       try {
          const Data= await detailModel.findOne(
            {_id:"638e1f21ef90ccbf990144bf"})
          const sliderData=await sliderModel.find()    
          const servicesData=await servicesModel.find()
            res.render('home',{title:'home',Data,sliderData,servicesData})
       } catch (error) {
        console.log(error)
       }
        
    }

    // GALLERY CONSTROLLLER
    
    static gallery= async(req,res)=>{
        try {
            const Data=await detailModel.findOne({_id:'638e1f21ef90ccbf990144bf'})
            res.render('gallery',{title:'Gallery',Data})
            
        } catch (error) {
            console.log(error)
        }
    }
    
    // Contact 

    static contact=async(req,res)=>{
        try {
            
            const contact=await contactModel(req.body)
            await contact.save()
            res.redirect('/')

        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }
}

export default mainClass