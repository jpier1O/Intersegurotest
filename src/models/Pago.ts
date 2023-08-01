// src/models/Pago.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';
import Poliza from './Poliza';

class Pago extends Model {
  public ID_Pago!: number;
  public ID_Poliza!: number;
  public Fecha_Pago!: Date;
  public Total_Pago!: number;
  public Moneda!: string;
}

Pago.init(
  {
    ID_Pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ID_Poliza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Poliza,
        key: 'ID_Poliza',
      },
    },
    Fecha_Pago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Total_Pago: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Moneda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Pago',
    tableName: 'Pagos',
    timestamps: false,
  }
);

// Relaciones entre modelos
Pago.belongsTo(Poliza, { foreignKey: 'ID_Poliza' });

export default Pago;
