// src/models/DetallePago.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';
import Pago from './Pago';

class DetallePago extends Model {
  public ID_Detalle_Pago!: number;
  public ID_Pago!: number;
  public Monto_Pago_Detalle!: number;
  public Metodo_Pago!: string;
  public Moneda!: string;
}

DetallePago.init(
  {
    ID_Detalle_Pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ID_Pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pago,
        key: 'ID_Pago',
      },
    },
    Monto_Pago_Detalle: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Metodo_Pago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Moneda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'DetallePago',
    tableName: 'DetallePagos',
    timestamps: false,
  }
);

// Relaciones entre modelos
DetallePago.belongsTo(Pago, { foreignKey: 'ID_Pago' });

export default DetallePago;
