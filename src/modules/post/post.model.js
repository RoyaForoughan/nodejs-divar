const { Schema, Types, model } = require("mongoose");

const PostSchema = new Schema({
    title:{type : String , required:true},
    content:{type:String , required:true},
    category:{type: Types.ObjectId , ref:'Category' , required:true},
    province:{type:String , required : false},
    city:{type:String , required:false},
    district:{type:String , required:false},
    address:{type:String , required:false},
    coordinate:{type:[Number] , require:true},
    image:{type:[String] , required:false},
},{
    timestamps:true
})


const PostModel = model('post' , PostSchema)
module.exports = PostModel