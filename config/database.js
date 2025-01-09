import pg from 'pg'
import config from './config.js';
const { Pool } = pg

// Configuración de la conexión
const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
});

pool.on('connect', () => {
  console.log('Conexión con postgres (la base de datos) establecida')
});

pool.on('error', (err) => {
  console.error('Error al conectar con postgres:', err)
});

export default pool;