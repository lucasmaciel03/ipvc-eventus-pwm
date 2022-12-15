import Sequelize from "sequelize";
import {
    dbInstance
} from "../config/db.js";

const UserModel = dbInstance.define(
    "users" /* table name */ , {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING(50),
            allowNull: false,
            UNIQUE: true,
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        surname: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false,
            UNIQUE: true,
        },
        contact: {
            type: Sequelize.STRING(50),
            allowNull: false,
            UNIQUE: true,
        },
        dateBirth: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
    }
);
export {
    UserModel
};