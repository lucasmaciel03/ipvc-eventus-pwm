import Router from "express";
import {
    getAllCategories,
    getCategoryByName,
    createCategory,
} from "../controllers/categories.js";

const categoryRoutes = Router();

categoryRoutes.get("/getAllCategories", getAllCategories);

categoryRoutes.get("/getCategoryByName/:name", getCategoryByName);

categoryRoutes.post("/createCategory", createCategory);

export { categoryRoutes };