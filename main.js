import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { db } from "./db.js";
import cors from "cors";
import { canchasRouter } from "./routers/canchas.router.js";
import { deportesRouter } from "./routers/deportes.router.js";
import { complejosRouter } from './routers/complejos.router.js';

// Configurar Express
const app = express();
app.use(express.json());
app.use(cors());

// Routers
app.use("/canchas", canchasRouter);
app.use("/deportes", deportesRouter);
app.use("/complejos", complejosRouter);

// Mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("API de Alquiler");
});

// Ejecutar API
app.listen(4000, async () => {
  try {
    await db.authenticate();
    console.log("Conexion a base de datos exitosa");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
  console.log("API en funcionamiento");
});
