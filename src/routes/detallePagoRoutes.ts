// src/routes/DetallePagosRoutes.ts
import express from 'express';
import DetallePagoController from '../controllers/DetallePagoController';

const router = express.Router();

router.use('/detalle-pago', DetallePagoController);

export default router;
