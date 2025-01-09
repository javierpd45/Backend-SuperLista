// server.js
const app = require('./src/app'); // Importa la aplicación configurada
const config = require('./config/config'); // Configuración desde config.js

const PORT = config.PORT || 5000; // Obtiene el puerto desde la configuración

// Inicia el servidor y muestra un mensaje en la consola
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://${config.HOST}:${PORT}`);
});


// console.log(`NODE_ENV=${config.NODE_ENV}`);
// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// app.listen(config.PORT, config.HOST, function () {
//     console.log(`App listening on 
// http://${config.HOST}:${config.PORT}`);
// });