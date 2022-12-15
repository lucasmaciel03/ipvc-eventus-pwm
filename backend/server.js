// Description: This file contains the server code for the backend
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { routes } from "./routes/index.js";
import { dbInstance } from "./config/db.js";

// create express app
const app = express();

// client can be postman | react website | react localhost link | etc
const clientURL = "http://localhost:5500";

// cors
const corsOptions = {
  origin: clientURL,
};
app.use(cors(corsOptions));

// morgan
app.use(morgan("short"));

// parse requests of content-type - application/json
app.use(express.json());
//  							 
app.use(express.urlencoded({ extended: true }));

// routes										.
app.use("/api", routes);

// sync db
try {
  dbInstance.sync({ force: false, alter: true });
} catch (error) {
  console.info(error);
}

// set port, listen for requests
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
