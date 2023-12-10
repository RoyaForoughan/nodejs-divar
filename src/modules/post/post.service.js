const autoBind = require("auto-bind");
const PostModel = require("./post.model");
const CategoryModel = require("../category/category.model");
const OptionModel = require("../option/option.model");

class PostService{
    #model
    #categoryModel
    #optionModel
    constructor(){
        autoBind(this)
        this.#model = PostModel
        this.#categoryModel = CategoryModel
        this.#optionModel = OptionModel
    }
    async getCategoryOptions(categoryId){
        const options = await this.#optionModel.find({category : categoryId})
        return options
    }
    async findAll (options) {
        let {category, search} = options;
        const query = {};
        if (category) {
            const result = await this.#categoryModel.findOne({slug: category});
            let categories = await this.#categoryModel.find({parents: result._id}, {_id: 1});
            categories = categories.map(item => item._id);
            if (result) {
                query['category'] = {
                    $in: [result._id, ...categories]
                };
            } else {
                return [];
            }
        }
        if (search) {
            search = new RegExp(search, "ig");
            query['$or'] = [
                {title: search},
                {description: search},
            ];
        }
        const posts = await this.#model.find(query, {}, {sort: {_id: -1}});
        return posts;
    }
}

module.exports = new PostService()