// src/routes/ClientesRoutes.ts
import express from 'express';
import { obtenerClientes, agregarCliente } from '../controllers/ClienteController';

const router = express.Router();

router.post('/clientes', agregarCliente);
router.get('/clientes', obtenerClientes);

export default router;
