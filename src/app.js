const express = require('express');
const app = express();
const routes = require('./routes'); // Importa las rutas

// Middleware para parsear JSON y datos codificados en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define un prefijo para las rutas
app.use('/api', routes);

// Ruta raíz para probar el servidor
app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

module.exports = app;
