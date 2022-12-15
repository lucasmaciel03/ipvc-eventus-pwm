import Router from "express";
import {
    createUser,
    deleteUser,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.delete("/deleteUser/:id", deleteUser);

export { userRoutes };