const {Schema , model} = require('mongoose')
const OTPSchema = new Schema({
    code:{type: String , required:false , default:undefined},
    expiresIn:{type:Number,require:false , default:0}
})
const UserSchema = new Schema({
        fullname : {type : String ,  required:false},
        mobile:{type : String , unique:true , require:true},
        otp:{type :OTPSchema},
        verifiedMobile:{type:Boolean , default:false , required:true},
        accessToken:{type:String}

},{timestamps : true})

const UserModel = model('user' , UserSchema)
module.exports = UserModel