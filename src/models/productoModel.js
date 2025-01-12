import pool from "../../config/database.js";

// obtener producto
export const selectProductos = async () => {
    const query = 'SELECT sp_obtener_productos()'
    const result = await pool.query(query)
    return result.rows
  }

// crear producto
export const insertProducto = async (nombre, descripcion, precio, categoria_id) => {
  const query = 'SELECT sp_crear_producto($1, $2, $3, $4)'
  const result = await pool.query(query, [ nombre, descripcion, precio, categoria_id ])
  return result.rows[0]
}