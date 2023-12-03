const autoBind = require("auto-bind")
const { AuthMessage } = require("./auth.message")
const authService = require("./auth.service")
const {StatusCodes : HttpStatus} = require('http-status-codes');
const CookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");

class AuthController{
    #service
    constructor(){
        autoBind(this)
        this.#service = authService
    }
    async sendOTP(req,res,next){
        try {
            const {mobile} = req.body
            await this.#service.sendOtp(mobile)
            return res.json({
                message : AuthMessage.SendOtpSuccessfully
            }) 
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req,res,next){
        try {
            const {mobile , code} = req.body
            const token =await this.#service.checkOtp(mobile , code)
            return res.cookie(CookieNames.Access_Token , token , {
                httpOnly:true , 
                secure:process.env.NODE_ENV = NodeEnv.Production
            }).status(HttpStatus.OK).json({
                statusCode : HttpStatus.OK,
                data:{
                    message: AuthMessage.LoginSuccessfully
                }
            })
            

        } catch (error) {
            next(error)
        }
    }
    async logOut(req,res,next){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new AuthController()
