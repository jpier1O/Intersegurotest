// src/models/Poliza.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';
import Cliente from './Cliente';
import Seguro from './Seguro';

class Poliza extends Model {
  public ID_Poliza!: number;
  public ID_Cliente!: number;
  public ID_Seguro!: number;
  public Fecha_Inicio!: Date;
  public Fecha_Vencimiento!: Date;
  public Estado_Poliza!: string;
}

Poliza.init(
  {
    ID_Poliza: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ID_Cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: 'ID_Cliente',
      },
    },
    ID_Seguro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Seguro,
        key: 'ID_Seguro',
      },
    },
    Fecha_Inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Fecha_Vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Estado_Poliza: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Poliza',
    tableName: 'Pólizas',
    timestamps: false,
  }
);

// Relaciones entre modelos
Poliza.belongsTo(Cliente, { foreignKey: 'ID_Cliente' });
Poliza.belongsTo(Seguro, { foreignKey: 'ID_Seguro' });

export default Poliza;
