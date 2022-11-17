import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { Cancha } from "./cancha.model.js";
import { Persona } from "./persona.model.js";

// Definir modelo de Alquiler
export const Alquiler = db.define(
  "alquiler",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    canchaId: { field: "id_cancha", 
      type: DataTypes.INTEGER,
      references: { model: Cancha, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT", 
    },
    personaId: {
      field: "id_persona",
      type: DataTypes.INTEGER,
      references: { model: Persona, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    hora_inicio: { field: "hora_inicio", type: DataTypes.TIME },
    hora_fin: { field: "hora_fin", type: DataTypes.TIME },
    fecha: { field: "fecha", type: DataTypes.DATEONLY },
    estado: { field: "estado", type: DataTypes.BOOLEAN }
  },
  { tableName: "alquiler", timestamps: false }
);
