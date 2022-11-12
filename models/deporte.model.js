import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de  deporte
export const Deporte = db.define(
  "deporte",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: "descripcion", type: DataTypes.STRING(100) },
  },
  { tableName: "deportes", timestamps: false }
);
