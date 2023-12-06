const autoBind = require("auto-bind");
const postService = require("./post.service");
const { model } = require("mongoose");

class PostController{
    #service
    constructor(){
        autoBind(this)
        this.#service = new postService
    }
    async createPostPage(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new PostController()