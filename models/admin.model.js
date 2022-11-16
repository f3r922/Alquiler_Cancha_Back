import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de cuenta
export const Admin = db.define(
  "admin",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: { field: "usuario", type: DataTypes.STRING(15) },
    password: { field: "password", type: DataTypes.STRING(150) },
  },
  {
    tableName: "admins",
    timestamps: false,
  }
);
