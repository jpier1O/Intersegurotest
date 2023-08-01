// src/models/Seguro.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';
import Cobertura from './Cobertura';

class Seguro extends Model {
  public ID_Seguro!: number;
  public ID_Cobertura!: number;
  public Nombre_Seguro!: string;
  public Descripcion!: string;
  public Precio!: number;
  public Moneda!: string;
  public Duracion!: string;
}

Seguro.init(
  {
    ID_Seguro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ID_Cobertura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cobertura,
        key: 'ID_Cobertura',
      },
    },
    Nombre_Seguro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Moneda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Duracion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Seguro',
    tableName: 'Seguros',
    timestamps: false,
  }
);

// Relaciones entre modelos
Seguro.belongsTo(Cobertura, { foreignKey: 'ID_Cobertura' });

export default Seguro;
