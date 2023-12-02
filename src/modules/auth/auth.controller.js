const autoBind = require("auto-bind")
const { AuthMessage } = require("./auth.message")
const authService = require("./auth.service")


class AuthController{
    #service
    constructor(){
        autoBind(this)
        this.#service = authService
    }
    async sendOTP(req,res,next){
        try {
            const {mobile} = req.body
            const result =await this.#service.sendOtp(mobile)
            return res.json({
                message : AuthMessage.SendOtpSuccessfully
            }) 
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
    async logOut(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new AuthController()
