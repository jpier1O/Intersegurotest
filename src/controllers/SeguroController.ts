// src/controllers/SeguroController.ts
import { Request, Response } from 'express';
import Seguro from '../models/Seguro';
import Cobertura from '../models/Cobertura';
import Cliente from '../models/Cliente';
import Poliza from '../models/Poliza';

export const getSeguros = async (_req: Request, res: Response) => {
  try {
    const seguros = await Seguro.findAll({ include: [Cobertura] });
    res.json(seguros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los seguros.' });
  }
};

export const obtenerDetalleSeguro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const seguro = await Seguro.findByPk(id, {
        include: [
          {
            model: Cobertura,
          },
          {
            model: Poliza,
            include: [Cliente],
            where: {
              Estado_Poliza: 'Activo', // Obtener solo las pólizas activas
            },
          },
        ],
      });
      if (!seguro) {
        return res.status(404).json({ error: 'Seguro no encontrado' });
      }
      res.json(seguro);
    } catch (error) {
      console.error('Error al obtener los detalles del seguro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };