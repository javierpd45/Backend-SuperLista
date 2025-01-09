import pool from "../../config/database.js";

// crear usuario
export const insertUser = async (
  nombre,
  email,
  password
) => {
  const query = 'sp_create_user($1, $2, $3)'
  const result = await pool.query(query, [
    nombre,
    email,
    password
  ])
  return result.rows[0]
}

// autenticar un usuario
export const authUserMod = async (
  email,
  password
) => {
  const query = 'sp_autenticar_usuario($1, $2)'
  const result = await pool.query(query, [
    email,
    password
  ])
  return result.rows[0]
}