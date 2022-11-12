import express from "express";
import { Complejo } from "../models/index.js";

export const complejosRouter = express.Router();

// GET /
complejosRouter.get("/", async (req, res) => {
  const complejos = await Complejo.findAll();
  res.send(complejos);
});
