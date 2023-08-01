// src/models/Cliente.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/db';

class Cliente extends Model {
  public ID_Cliente!: number;
  public Nombre_Cliente!: string;
  public Direccion!: string;
  public Correo_Electronico!: string;
  public Telefono!: string;
  public Fecha_Nacimiento!: Date;
  public Sexo!: string;
}

Cliente.init(
  {
    ID_Cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Nombre_Cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo_Electronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha_Nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Sexo: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes',
    timestamps: false,
  }
);

export default Cliente;
