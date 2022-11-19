import express from "express";
import { Persona } from "../models/persona.model.js";

export const personasRouter = express.Router();

// GET /
personasRouter.get("/", async (req, res) => {
  const personas = await Persona.findAll();
  res.send(personas);
});

// GET /:id
personasRouter.get("/:id", async (req, res) => {
  const persona = await Persona.findByPk(req.params.id);
  res.send(persona);
});

// POST /
personasRouter.post("/", async (req, res) => {
  const nuevaPersona = await Persona.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    telefono: req.body.telefono
  });
  res.send(nuevaPersona);
});

// PUT /:id
personasRouter.put("/:id", async (req, res) => {
  await Persona.update(
    { 
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      telefono: req.body.telefono
    },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
personasRouter.delete("/:id", async (req, res) => {
  await Persona.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
