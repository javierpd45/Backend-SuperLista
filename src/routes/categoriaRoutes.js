import { Router } from "express";
import * as categoriaController from "../controllers/categoriaController.js"

const router = Router();

// Rutas de categorias

// POSTs
router.post('/create', categoriaController.createCategoria)

// GETs
router.get('/', categoriaController.getCategorias);

export default router;