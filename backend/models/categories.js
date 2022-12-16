import Sequelize from "sequelize";
import {
    dbInstance
} from "../config/db.js";

const CategoryModel = dbInstance.define(
    "categories" /* table name */ , {
        id_category: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
    }
);

export { CategoryModel };