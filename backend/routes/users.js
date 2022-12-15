import Router from "express";
import {
    createUser,
    getAllUsers
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);


export { userRoutes };