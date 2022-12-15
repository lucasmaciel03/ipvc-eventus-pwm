import { CategoryModel } from '../models/categories.js'

// get all categories and dont return id
export const getAllCategories = async (req, res) => {
    const categories = await CategoryModel.findAll({
        attributes: {
            exclude: ['id']
        }
    })

    return res.status(200).json({
        categories
    })
}

// create new category if category name already exist return error
export const createCategory = async (req, res) => {
    const { name } = req.body

    const category = await CategoryModel.findOne({
        where: {
            name: name
        }
    })

    if (category) {
        return res.status(400).json({
            message: 'Category already exist'
        })
    }

    await CategoryModel.create({
        name: name
    })

    return res.status(200).json({
        message: 'Category created'
    })
}



