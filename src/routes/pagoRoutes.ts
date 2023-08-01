// src/routes/PagosRoutes.ts
import express from 'express';
import {registrarPago } from '../controllers/PagoController';

const router = express.Router();

router.post('/pagos', registrarPago);

export default router;
