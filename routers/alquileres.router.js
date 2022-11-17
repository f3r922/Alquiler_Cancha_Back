import express from "express";
import { Alquiler, Cancha, Persona } from "../models/index.js";

export const alquileresRouter = express.Router();

// GET /
alquileresRouter.get("/", async (req, res) => {
  const alquileres = await Alquiler.findAll({ include: [Cancha, Persona] });
  res.send(alquileres);
});

// GET /:id
alquileresRouter.get("/:id", async (req, res) => {
  const alquiler = await Alquiler.findByPk(req.params.id);
  res.send(alquiler);
});

// POST /
alquileresRouter.post("/", async (req, res) => {
  const nuevoAlquiler = await Alquiler.create({
    canchaId: req.body.canchaId,
    personaId: req.body.personaId,
    hora_inicio: req.body.hora_inicio,
    hora_fin: req.body.hora_fin,
    fecha: req.body.fecha,
    estado: req.body.estado
  });
  res.send(nuevoAlquiler);
});

// PUT /:id
alquileresRouter.put("/:id", async (req, res) => {
  await Alquiler.update(
    { 
        canchaId: req.body.canchaId,
        personaId: req.body.personaId,
        hora_inicio: req.body.hora_inicio,
        hora_fin: req.body.hora_fin,
        fecha: req.body.fecha,
        estado: req.body.estado
    },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
alquileresRouter.delete("/:id", async (req, res) => {
  await Alquiler.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
