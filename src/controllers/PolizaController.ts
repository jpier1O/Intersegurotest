// src/controllers/PolizasController.ts
import express, { Request, Response } from 'express';
import Poliza from '../models/Poliza';

const router = express.Router();

// Endpoint para obtener la lista de todas las pólizas
export const obtenerPolizas = async (_req: Request, res: Response) => {
  try {
    const polizas = await Poliza.findAll();
    return res.json(polizas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener las pólizas' });
  }
};

export const registrarPoliza = async (req: Request, res: Response) => {
  const { ID_Cliente, ID_Seguro, Fecha_Inicio, Fecha_Vencimiento, Estado_Poliza } = req.body;
  try {
    const poliza = await Poliza.create({
      ID_Cliente,
      ID_Seguro,
      Fecha_Inicio,
      Fecha_Vencimiento,
      Estado_Poliza,
    });
    res.json(poliza);
  } catch (error) {
    console.error('Error al registrar una nueva póliza:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// ... otros endpoints para crear, actualizar y eliminar pólizas

export default router;
