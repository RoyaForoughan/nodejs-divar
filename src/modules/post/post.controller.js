const autoBind = require("auto-bind");
const postService = require("./post.service");
const { model } = require("mongoose");
const CategoryModel = require("../category/category.model");
const createHttpError = require("http-errors");

class PostController{
    #service
    constructor(){
        autoBind(this)
        this.#service = postService
    }
    async createPostPage(req,res,next){
        try {
            let {slug} = req.query
            let showBack = false
            let match = {parent : null}
            let options , category 
            if(slug){
                slug =  slug.trim()
                category = await CategoryModel.findOne({slug})
                if(!category) throw new createHttpError.NotFound(postMessage.NotFound)
                options = await this.#service.getCategoryOptions(category._id)
                if(options.length === 0 ) options = null
                showBack = true
                match = {
                    parent:category._id
                }
            }
            const categories = await CategoryModel.aggregate([
                {
                    $match: match
                }
            ])
            console.log(categories);
            res.render('./pages/panel/create-post.ejs',{
                categories,
                showBack,
                category: category?._id.toString(),
                options,
            })
        } catch (error) {
            next(error)
        }
    }

    async postList (req, res, next) {
        try {
            const query = req.query;
            const posts = await this.#service.findAll(query);
            res.locals.layout = "./layouts/website/main.ejs";
            res.render("./pages/home/index.ejs", {
                posts
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PostController()