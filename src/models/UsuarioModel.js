import pool from "../../config/database.js";

// crear usuario
export const insertUser = async (nombre, email, password) => {
  const query = 'SELECT sp_crear_usuario($1, $2, $3)'
  const result = await pool.query(query, [ nombre, email, password])
  return result.rows[0]
}

// autenticar un usuario
export const authUserMod = async (email, password) => {
  const query = 'SELECT sp_autenticar_usuario($1, $2)'
  const result = await pool.query(query, [ email, password ])
  return result.rows[0]
}

// obtener usuarios
export const selectUsuarios = async () => {
  const query = 'SELECT sp_obtener_usuarios()'
  const result = await pool.query(query)
  return result.rows
}