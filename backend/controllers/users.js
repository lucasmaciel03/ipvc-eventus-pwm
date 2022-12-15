import bcrypt from 'bcrypt';
import { UserModel } from "../models/users.js";

// get all users from table users, dont return password
export const getAllUsers = async (req, res) => {
    const users = await UserModel.findAll({
        attributes: {
            exclude: ["password"],
        },
    });

    return res.status(200).json({
        users,
    });
};

// delete user by id
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user
        = await UserModel.findOne({
            where: {
                id: id,
            },
        });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    await UserModel.destroy({
        where: {
            id: id,
        },
    });

    return res.status(200).json({
        message: "User deleted", user, });
};

// create user
export const createUser = async (req, res) => {
    const { username, name, surname, email, contact, dateBirth, password } = req.body;

    const user = await UserModel.findOne({
        where: {
            username: username,
        },
    });

    if (user) {
        return res.status(400).json({
            message: "Username already exist",
        });
    }

    const user2 = await UserModel.findOne({
        where: {
            email: email,
        },
    });

    if (user2) {
        return res.status(400).json({
            message: "Email already exist",
        });
    }

    const user3 = await UserModel.findOne({
        where: {
            contact: contact,
        },
    });

    if (user3) {
        return res.status(400).json({
            message: "Contact already exist",
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
        username: username,
        name: name,
        surname: surname,
        email: email,
        contact: contact,
        dateBirth: dateBirth,
        password: hashedPassword,
    });

    return res.status(201).json({
        message: "User created",
        newUser,
    });
};