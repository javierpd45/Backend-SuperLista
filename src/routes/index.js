import pool from '../../config/database.js';
import usuarioRouter from './usuarioRoutes.js'

export const setupRoutes = (app) => {

    app.use('/usuarios', usuarioRouter)

    app.get('/', async(req, res) => {
        try {
            const result = await pool.query('SELECT NOW()')
            console.log(result);
            // const result = await sql.query`SELECT GETDATE()`
            // console.dir(result)
            res.json({message: 'Conexion exitosa', time: result.rows[0]})
        } catch (error) {
            res.status(500).json({message: 'No se pudo conectar.', error})
        }
    });

};