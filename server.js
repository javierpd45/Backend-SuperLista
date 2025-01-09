// server.js
import app from './src/app.js' // Importa la aplicación configurada
import config from './config/config.js' // Configuración desde config.js

console.log({ config });

// Inicia el servidor y muestra un mensaje en la consola
app.listen(config.PORT, config.HOST, () => { // Obtiene el puerto desde la configuración
  console.log(`Servidor corriendo en http://${config.HOST}:${PORT} en el ambiente ${config.NODE_ENV}`);
});


// console.log(`NODE_ENV=${config.NODE_ENV}`);
// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// app.listen(config.PORT, config.HOST, function () {
//     console.log(`App listening on 
// http://${config.HOST}:${config.PORT}`);
// });