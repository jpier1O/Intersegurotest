import express from 'express';
import { getSeguros, obtenerDetalleSeguro } from '../controllers/SeguroController';

const router = express.Router();

router.get('/seguro', getSeguros);
router.get('/seguros/:id', obtenerDetalleSeguro);


export default router;