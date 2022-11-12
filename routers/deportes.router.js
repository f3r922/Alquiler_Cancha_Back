import express from "express";
import { Deporte } from "../models/index.js";

export const deportesRouter = express.Router();

// GET /
deportesRouter.get("/", async (req, res) => {
  const deportes = await Deporte.findAll();
  res.send(deportes);
});

// GET /:id
deportesRouter.get("/:id", async (req, res) => {
  const deporte = await Deporte.findByPk(req.params.id);
  res.send(deporte);
});

// POST /
deportesRouter.post("/", async (req, res) => {
  const nuevoDeporte = await Deporte.create({
    descripcion: req.body.descripcion,
  });
  res.send(nuevoDeporte);
});

// PUT /:id
deportesRouter.put("/:id", async (req, res) => {
  await Deporte.update(
    { 
      descripcion: req.body.descripcion,
    },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
deportesRouter.delete("/:id", async (req, res) => {
  await Deporte.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
