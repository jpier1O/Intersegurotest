// src/controllers/pagos.controller.ts
import { Request, Response } from 'express';
import Pago from '../models/Pago';
import DetallePago from '../models/DetallePago';
import sequelize from '../services/db';

export const registrarPago = async (req: Request, res: Response) => {
  const { ID_Poliza, Fecha_Pago, Total_Pago, Moneda_Pago, Detalles } = req.body;
  let transaction;
  try {
    // Iniciar transacción
    transaction = await sequelize.transaction();

    // Registrar el pago en Tabla Pagos
    const pago = await Pago.create(
      {
        ID_Poliza,
        Fecha_Pago,
        Total_Pago,
        Moneda_Pago,
      },
      { transaction }
    );

    // Registrar los detalles del pago en Tabla Pagos Detalle
    for (const detalle of Detalles) {
      await DetallePago.create(
        {
          ID_Pago: pago.ID_Pago,
          ...detalle,
        },
        { transaction }
      );
    }

    // Confirmar transacción
    await transaction.commit();

    res.json({ message: 'Pago registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar un nuevo pago:', error);
    // Revertir transacción en caso de error
    if (transaction) {
      await transaction.rollback();
    }
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
