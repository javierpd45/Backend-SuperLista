import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController.js';

const router = Router();

// Rutas de usuarios
// POSTs
router.post('/create', usuarioController.createUser);

router.post('/auth', usuarioController.authUser);

// GETs
router.get('/', usuarioController.getUsuarios);

export default router;