import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de materias
export const Complejo = db.define(
  "complejo",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    denominacion: { field: "denominacion", type: DataTypes.STRING(100) },
    encargado: { field: "encargado", type: DataTypes.STRING(100) },
    dni: { field: "dni", type: DataTypes.STRING(8) },
    domicilio: { field: "domicilio", type: DataTypes.STRING(100) },
    fechaAlta: { field: "fecha_alta", type: DataTypes.DATEONLY },
  },
  { tableName: "complejos_deportivos", timestamps: false } 
);
