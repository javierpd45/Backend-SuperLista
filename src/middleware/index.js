import express from 'express'
import cors from 'cors'

export const appMiddleware = (app) => {
  // Agregar el middleware (antes de que se ejecute la petición)
  // Middleware para parsear JSON y datos codificados en URL
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors())
}