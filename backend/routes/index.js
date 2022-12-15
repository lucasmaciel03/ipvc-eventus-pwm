import Router from "express";
import { userRoutes } from "../routes/users.js";

const routes = Router();

routes.use("/user", userRoutes);

// 1:13:40

export { routes };