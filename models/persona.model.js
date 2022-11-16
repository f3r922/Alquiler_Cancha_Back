import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de persona
export const Persona = db.define(
  "persona",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", type: DataTypes.STRING(100) },
    apellido: { field: "apellido", type: DataTypes.STRING(100) },
    dni: { field: "dni", type: DataTypes.STRING(8) },
    telefono: { field: "telefono", type: DataTypes.STRING(100) }
    
  },
  { tableName: "personas", timestamps: false } 
);
