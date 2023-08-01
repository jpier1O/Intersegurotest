// src/controllers/CoberturasController.ts
import express, { Request, Response } from 'express';
import Cobertura from '../models/Cobertura';

const router = express.Router();

// Endpoint para obtener la lista de todas las coberturas
export const obtenerCoberturas = async (req: Request, res: Response) => {
    try {
      const coberturas = await Cobertura.findAll();
      res.json(coberturas);
    } catch (error) {
      console.error('Error al obtener la lista de coberturas:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

export default router;
