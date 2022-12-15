import Router from "express";
import {
    createEvent,
    getAllEvents
} from "../controllers/events.js";



const eventRoutes = Router();

eventRoutes.post("/createEvent", createEvent);

eventRoutes.get("/getAllEvents", getAllEvents);

export { eventRoutes };