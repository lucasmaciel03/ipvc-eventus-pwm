import Router from "express";

const routes = Router();

// {host}/api/hello
routes.get("/hello", (req, res) => {
  res.send({ message: "Hello World!" });
});


export { routes };