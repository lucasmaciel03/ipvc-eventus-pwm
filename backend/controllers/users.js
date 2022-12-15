import bcrypt from 'bcrypt';
import { UserModel } from "../models/users.js";

// create user and crypt password, if username or email already exist, return error
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


