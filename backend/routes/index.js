import Router from "express";
import { userRoutes } from "../routes/users.js";

const routes = Router();

routes.use("/user", userRoutes);

export { routes };