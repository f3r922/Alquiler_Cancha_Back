import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { Deporte } from "./deporte.model.js";
import { Complejo } from "./complejo.model.js";

// Definir modelo de cuenta
export const Cancha = db.define(
  "cancha",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    deporteId: { field: "id_deporte", 
      type: DataTypes.INTEGER,
      references: { model: Deporte, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT", 
    },
    complejoId: {
      field: "id_complejo_deportivo",
      type: DataTypes.INTEGER,
      references: { model: Complejo, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    tipoPisp: { field: "tipo_pisp", type: DataTypes.STRING(100) },
    iluminacion: { field: "iluminacion", type: DataTypes.BOOLEAN },
    techada: { field: "techada", type: DataTypes.BOOLEAN },
    precioh: { field: "precio_h", type: DataTypes.DECIMAL },
    descripcion: { field: "descripcion", type: DataTypes.STRING(100) },
    hora_inicio: { field: "hora_inicio", type: DataTypes.TIME },
    hora_fin: { field: "hora_fin", type: DataTypes.TIME },
    estado: { field: "estado", type: DataTypes.BOOLEAN },
  },
  { tableName: "canchas", timestamps: false }
);
