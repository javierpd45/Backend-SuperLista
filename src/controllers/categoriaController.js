import * as categoriaModel from "../models/categoriaModel.js"

export const getCategorias = async (req, res) => {
    try {
        const categorias = await categoriaModel.selectCategorias()
        res.status(201).json(categorias)   
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error: no se pudieron obtener las categorias." })
    }
}

export const createCategoria = async (req, res) => {
    try {
        const {nombre, descripcion} = req.body
        console.log(nombre, descripcion)
        const newCategoria = await categoriaModel.insertCategoria(nombre, descripcion)
        res.status(201).json(newCategoria)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error, no se pudo crear la categoria." })
    }
}