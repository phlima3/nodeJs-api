import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.getBooks)
  .get("/livros/busca", LivroController.getBookByPublisher)
  .get("/livros/:id", LivroController.getBook)
  .post("/livros", LivroController.createBook)
  .put("/livros/:id", LivroController.updateBook)
  .delete("/livros/:id", LivroController.deleteBook);

export default router;
