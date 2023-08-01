// src/controllers/ClientesController.ts
import express, { Request, Response } from 'express';
import Cliente from '../models/Cliente';

const router = express.Router();

// Endpoint para obtener la lista de todos los clientes
export const obtenerClientes = async (_req: Request, res: Response) => {
  try {
    const clientes = await Cliente.findAll();
    return res.json(clientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los clientes' });
  }
};


export const agregarCliente = async (req: Request, res: Response) => {
  const { Nombre_Cliente, Direccion, Correo_Electronico, Telefono, Fecha_Nacimiento, Sexo } = req.body;
  try {
    const cliente = await Cliente.create({
      Nombre_Cliente,
      Direccion,
      Correo_Electronico,
      Telefono,
      Fecha_Nacimiento,
      Sexo,
    });
    res.json(cliente);
  } catch (error) {
    console.error('Error al agregar un nuevo cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


export default router;
