import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.getAuthors)
  .post("/autores", AutorController.createAuthor)
  .put("/autores/:id", AutorController.updateAuthor)
  .get("/autores/:id", AutorController.getAuthor)
  .delete("/autores/:id", AutorController.deleteAuthor);

export default router;
