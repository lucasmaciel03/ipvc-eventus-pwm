import Sequelize from "sequelize";
import {
    dbInstance
} from "../config/db.js";

const EventModel = dbInstance.define(
    "events" /* table name */ , {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_category: {
            type: Sequelize.INTEGER,
            references: {
                model: "categories",
                key: "id_category",
            },
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        dateStart: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        dateEnd: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        value: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
    }
);

export { EventModel };


