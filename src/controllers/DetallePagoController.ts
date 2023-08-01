// src/controllers/DetallePagosController.ts
import express, { Request, Response } from 'express';
import DetallePago from '../models/DetallePago';

const router = express.Router();

// Endpoint para obtener la lista de todos los detalles de pagos
router.get('/detalle-pagos', async (_req: Request, res: Response) => {
  try {
    const detallesPagos = await DetallePago.findAll();
    return res.json(detallesPagos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los detalles de pagos' });
  }
});

export default router;
