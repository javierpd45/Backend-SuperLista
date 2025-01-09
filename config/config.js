// config.js
import dotenv from 'dotenv'
import path from 'path';

// Carga el archivo correspondiente al entorno
const env = process.env.NODE_ENV.trim() || 'development'
const envFilePath = path.resolve('/config/${env}.env');

dotenv.config({ path: envFilePath })


// dotenv.config({
//   path: path.resolve(__dirname, process.env.NODE_ENV + '.env'),
// });

// Exporta la configuración del entorno

const config = {
  NODE_ENV: env,
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 1433, // Puerto predeterminado para SQL Server
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || 'SuperListaDB',
  },
  JWT_SECRET: process.env.JWT_SECRET || 'supersecretkey',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
};

export default config;

// module.exports = {
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   HOST: process.env.HOST || '127.0.0.1',
//   PORT: process.env.PORT || 3000,
//   DB_HOST: process.env.DB_HOST || 'localhost',
//   DB_PORT: process.env.DB_PORT || 1433, // Puerto predeterminado para SQL Server
//   DB_USER: process.env.DB_USER || 'root',
//   DB_PASSWORD: process.env.DB_PASSWORD || '',
//   DB_NAME: process.env.DB_NAME || 'super_lista',
//   JWT_SECRET: process.env.JWT_SECRET || 'supersecretkey',
//   JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
// };
