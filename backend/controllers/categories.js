import { CategoryModel } from '../models/categories.js'

// get all categories
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

// get category by name 

export const getCategoryByName = async (req, res) => {
    const { name } = req.params

    const category = await CategoryModel.findOne({
        where: {
            name: name
        },
        attributes: {
            exclude: ['id']
        }
    })

    if (!category) {
        return res.status(404).json({
            message: 'Category not found'
        })
    }

    return res.status(200).json({
        category
    })
}

// create new category 
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



