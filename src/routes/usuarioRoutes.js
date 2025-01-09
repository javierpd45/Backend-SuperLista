import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController.js';

const router = Router();

// Rutas de usuarios
// POSTs
router.post('/', usuarioController.createUser);

// GETs
router.get('/', usuarioController.authUser);

export default router;