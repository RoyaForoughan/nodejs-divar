const autoBind = require("auto-bind");
const categoryService = require("./category.service");
const CategoryMessage = require("./category.message");
const {StatusCodes : HttpStatus} = require('http-status-codes');

class CategoryController{
    #service
    constructor(){
        autoBind(this)
        this.#service = categoryService
    }
    async find(req,res,next){
        const categories = await this.#service.find()
        return res.json(categories)
    }
    async create(req,res,next){
        try {
            const {name , slug , icon , parent} = req.body
            await this.#service.create({name , slug , icon , parent})
            res.status(HttpStatus.CREATED).json({
                message : CategoryMessage.Created
            })
        } catch (error) {
            next(error)
        }
    }

   async remove(req,res,next){
        const {id} = req.params
        await this.#service.remove(id)
        return res.json({
            message:CategoryMessage.Deleted
        })
   }
}

module.exports = new CategoryController()