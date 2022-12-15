import Router from "express";
import { userRoutes } from "../routes/users.js";
import { categoryRoutes } from "../routes/categories.js";
import { eventRoutes } from "../routes/events.js";

const routes = Router();

routes.use("/user", userRoutes);

routes.use("/category", categoryRoutes);

routes.use("/event", eventRoutes);



export { routes };