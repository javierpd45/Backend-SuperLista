const express = require('express');
const router = express.Router();

// Importa subrutas (por ejemplo, usuarios, productos, categorías)
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');

// Define las rutas
router.use('/usuarios', userRoutes);
router.use('/categorias', categoryRoutes);
router.use('/productos', productRoutes);

module.exports = router;
