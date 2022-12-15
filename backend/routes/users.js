import Router from "express";
import {
    createUser,
    getAllUsers,
    deleteUser
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.delete("/deleteUser/:id", deleteUser);


export { userRoutes };