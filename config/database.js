import sql from 'mssql'
import config from './config.js';
const { Pool } = sql

// Configuración de la conexión
const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  options: {
    encrypt: true, // Usar en Azure o conexiones seguras
    trustServerCertificate: true, // Solo para entornos locales
  }
});

pool.on('connect', () => {
  console.log('Conexión con SQL Server establecida')
});

pool.on('error', (err) => {
  console.error('Error al conectar con SQL Server:', err)
});

export default pool;

// // Configuración de la conexión
// const dbConfig = {
//   user: config.DB_USER,
//   password: config.DB_PASSWORD,
//   server: config.DB_HOST,
//   database: config.DB_NAME,
//   port: parseInt(config.DB_PORT, 10),
//   options: {
//     encrypt: true, // Usar en Azure o conexiones seguras
//     trustServerCertificate: true, // Solo para entornos locales
//   },
// };

// // Crear un pool de conexión
// const poolPromise = new sql.ConnectionPool(dbConfig)
//   .connect()
//   .then(pool => {
//     console.log('Conexión con SQL Server establecida');
//     return pool;
//   })
//   .catch(err => {
//     console.error('Error al conectar con SQL Server:', err);
//     throw err;
//   });

// module.exports = {
//   sql,
//   poolPromise,
// };
