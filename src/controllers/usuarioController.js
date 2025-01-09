import * as usuarioModel from '../models/usuarioModel.js'

export const createUser = async (req, res) => {
    try {
        const {
            nombre,
            email,
            password
        } = req.body
        const newUser = await usuarioModel.insertUser(
            nombre,
            email,
            password
        )
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error, no se pudo crear el usuario." })
    }
}

export const authUser = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const newAuth = await usuarioModel.authUserMod(
            email,
            password
        )
        res.status(201).json(newAuth)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error, no se pudo autenticar el usuario." })
    }
}