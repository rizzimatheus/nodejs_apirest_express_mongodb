import express from "express";
import LivroController from "../controllers/livrosController.js";
import livrosController from "../controllers/livrosController.js";

const router = express.Router();

// Rotas mais específicas antes das menos específicas
// /livros/bucas é mais específica que /livros/:id por possuir query params
router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", livrosController.cadastrarLivro)
  .put("/livros/:id", livrosController.atualizarLivro)
  .delete("/livros/:id", livrosController.excluirLivro)

export default router;