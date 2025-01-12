import * as productoModel from '../models/productoModel.js';

export const getProductos = async (req, res) => {
    try {
        const productos = await productoModel.selectProductos()
        res.status(201).json(productos)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error, no se pudieron obtener los productos" })
    }
}

export const createProducto = async (req, res) => {
    try {
        const {nombre, descripcion, precio, categoria_id} = req.body
        console.log(nombre, descripcion, precio, categoria_id)
        const newProducto = await productoModel.insertProducto(nombre, descripcion, precio, categoria_id)
        res.status(201).json(newProducto)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error, no se pudo crear el producto." })
    }
}