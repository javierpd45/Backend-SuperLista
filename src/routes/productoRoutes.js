import { Router } from 'express';
import * as productoController from '../controllers/productoController.js';

const router = Router();

// Rutas de productos
// POSTs
router.post('/create', productoController.createProducto);

// GETs
router.get('/', productoController.getProductos);

export default router;