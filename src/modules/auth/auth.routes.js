const {Router} = require('express')
const authController = require('./auth.controller')


const router = Router()

router.post('/send-otp' , authController.sendOTP)
//router.post('/check-otp' , AuthController.checkOTP)

module.exports = {
    AuthRouter : router
}