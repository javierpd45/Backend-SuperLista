import pool from "../../config/database.js";

// obtener categoria
export const selectCategorias = async () => {
    const query = 'SELECT sp_obtener_categorias()'
    const result = await pool.query(query)
    return result.rows
  }

// crear categoria
export const insertCategoria = async (nombre, descripcion) => {
    const query = 'SELECT sp_crear_categoria($1, $2)'
    const result = await pool.query(query, [ nombre, descripcion])
    return result.rows[0]
  }