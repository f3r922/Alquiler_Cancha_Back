import express from "express";
import { Cancha, Complejo, Deporte } from "../models/index.js";

export const canchasRouter = express.Router();

// GET /
canchasRouter.get("/", async (req, res) => {
  const canchas = await Cancha.findAll({ include: [Deporte, Complejo] });
  res.send(canchas);
});

// GET /:id
canchasRouter.get("/:id", async (req, res) => {
  const cancha = await Cancha.findByPk(req.params.id);
  res.send(cancha);
});

// POST /
canchasRouter.post("/", async (req, res) => {
  const nuevaCancha = await Cancha.create({
    deporteId: req.body.deporte,
    complejoId: req.body.complejo,
    tipoPisp: req.body.suelo,
    iluminacion: req.body.iluminacion,
    techada: req.body.techada,
    precioh: req.body.precioh,
    descripcion: req.body.descripcion,
    hora_inicio: req.body.horaInicio,
    hora_fin: req.body.horaFin,
    estado: req.body.estado
  });
  res.send(nuevaCancha);
});

// PUT /:id
canchasRouter.put("/:id", async (req, res) => {
  await Cancha.update(
    { 
      deporteId: req.body.deporte,
      complejoId: req.body.complejo,
      tipoPisp: req.body.suelo,
      iluminacion: req.body.iluminacion,
      techada: req.body.techada,
      precioh: req.body.precioh,
      descripcion: req.body.descripcion,
      hora_inicio: req.body.horaInicio,
      hora_fin: req.body.horaFin,
      estado: req.body.estado
    },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
canchasRouter.delete("/:id", async (req, res) => {
  await Cancha.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
