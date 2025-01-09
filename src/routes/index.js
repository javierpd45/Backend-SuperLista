// // Importa subrutas (usuarios, productos, categorías)
// const userRoutes = require('./userRoutes');
// const categoryRoutes = require('./categoryRoutes');
// const productRoutes = require('./productRoutes');


import pool from "../../config/database.js";

// // Define las rutas
// router.use('/usuarios', userRoutes);
// router.use('/categorias', categoryRoutes);
// router.use('/productos', productRoutes);

export const setupRoutes = (app) => {
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