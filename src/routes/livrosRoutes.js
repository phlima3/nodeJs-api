import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.getBooks)
  .post("/livros", LivroController.createBook)
  .put("/livros/:id", LivroController.updateBook)
  .get("/livros/:id", LivroController.getBook)
  .delete("/livros/:id", LivroController.deleteBook);

export default router;
