import Router from "express";
import {
    createUser,
    getAllUsers,
    deleteUser,
    updateUsername
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.delete("/deleteUser/:id", deleteUser);

userRoutes.put("/updateUsername/:id", updateUsername);


export { userRoutes };