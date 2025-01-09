const express = require('express');
const routes = require('./routes'); // Importa las rutas
import { appMiddleware } from './middleware';

const app = express();

// Middleware para parsear JSON y datos codificados en URL
appMiddleware(app);

// Define un prefijo para las rutas
app.use('/api', routes);

// Ruta raíz para probar el servidor
app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

module.exports = app;
