import express from "express";
import { Complejo } from "../models/index.js";

export const complejosRouter = express.Router();

// GET /
complejosRouter.get("/", async (req, res) => {
  const complejos = await Complejo.findAll();
  res.send(complejos);
});

// GET /:id
complejosRouter.get("/:id", async (req, res) => {
  const complejo = await Complejo.findByPk(req.params.id);
  res.send(complejo);
});

// POST /
complejosRouter.post("/", async (req, res) => {
  const nuevoComplejo = await Complejo.create({
    denominacion: req.body.descripcion,
    encargado: req.body.encargado,
    dni: req.body.dni,
    domicilio: req.body.domicilio,
    fechaAlta: req.body.fechaAlta
  });
  res.send(nuevoComplejo);
});

// PUT /:id
complejosRouter.put("/:id", async (req, res) => {
  await Complejo.update(
    { 
      denominacion: req.body.denominacion,
      encargado: req.body.encargado,
      dni: req.body.dni,
      domicilio: req.body.domicilio,
      fechaAlta: req.body.fechaAlta
    },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
complejosRouter.delete("/:id", async (req, res) => {
  await Complejo.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
