import express from "express";
import AutorController from "../controllers/autoresController.js";
import autoresController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", autoresController.cadastrarAutor)
  .put("/autores/:id", autoresController.atualizarAutor)
  .delete("/autores/:id", autoresController.excluirAutor)

export default router;