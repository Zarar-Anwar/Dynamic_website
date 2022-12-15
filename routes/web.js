import express from 'express'
import mainClass from '../controller/controller.js'

const router=express.Router()

router.get('/',mainClass.home)
router.get('/gallery',mainClass.gallery)
router.post('/contact',mainClass.contact)
   


export default router