import Router from "express";
import { userRoutes } from "../routes/users.js";
import { categoryRoutes } from "../routes/categories.js";

const routes = Router();

routes.use("/user", userRoutes);

routes.use("/category", categoryRoutes);

export { routes };