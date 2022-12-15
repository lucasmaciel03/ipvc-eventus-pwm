import Router from "express";
import {
    createUser,
    getAllUsers,
    getUserByUsername,
    deleteUser,
    updateUsername,
    updateNameSurname,
    updateContact,
    updateEmail,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.get("/getUserByUsername/:username", getUserByUsername);

userRoutes.delete("/deleteUser/:id", deleteUser);

userRoutes.put("/updateUsername/:id", updateUsername);

userRoutes.put("/updateNameSurname/:id", updateNameSurname);

userRoutes.put("/updateContact/:id", updateContact);

userRoutes.put("/updateEmail/:id", updateEmail);


export { userRoutes };