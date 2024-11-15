import express from 'express'
import { removeBgImage } from '../controllers/ImageContoller.js'
import upload from '../middlewares/multer.js'
import authUser from '../middlewares/auth.js'

const imageRouter=express.Router()

imageRouter.post('/remove-bg',upload.single('image'),authUser,removeBgImage)

export default imageRouter