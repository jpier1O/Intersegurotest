// src/models/Cobertura.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';

class Cobertura extends Model {}

Cobertura.init(
  {
    ID_Cobertura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Nombre_Cobertura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cobertura',
    tableName: 'Coberturas',
    timestamps: false,
  }
);

export default Cobertura;
