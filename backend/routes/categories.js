import Router from "express";
import {
    getAllCategories,
    createCategory,
} from "../controllers/categories.js";

const categoryRoutes = Router();

categoryRoutes.get("/getAllCategories", getAllCategories);

categoryRoutes.post("/createCategory", createCategory);

export { categoryRoutes };