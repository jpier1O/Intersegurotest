// src/routes/PolizasRoutes.ts
import express from 'express';
import { registrarPoliza, obtenerPolizas } from '../controllers/PolizaController';

const router = express.Router();

router.get('/polizas', obtenerPolizas);
router.post('/polizas', registrarPoliza);

export default router;
