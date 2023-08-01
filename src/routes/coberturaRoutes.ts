// src/routes/CoberturasRoutes.ts
import express from 'express';
import { obtenerCoberturas } from '../controllers/CoberturaController';

const router = express.Router();

router.get('/coberturas', obtenerCoberturas);

export default router;
