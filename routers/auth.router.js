import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcryptjs";
import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import passport from "passport";

export const authRouter = express.Router();

// POST /registrar
authRouter.post("/registrar", async (req, res) => {
  const passwordHashed = await bcrypt.hash(req.body.password, 8);
  const nuevoAdmin = await Admin.create({
    usuario: req.body.usuario,
    password: passwordHashed,
  });
  res.send("Admin creado con exito");
});

// POST /login
authRouter.post("/login", async (req, res) => {
  const admin = await Admin.findOne({ where: { usuario: req.body.usuario } });
  
  console.log(admin);
  if (!admin) {
    res.send("Usuario o contraseña inválida");
    return;
  }
  const passwordCompared = await bcrypt.compare(
    req.body.password,
    admin.password
  );
  if (!passwordCompared) {
    res.send("Usuario o contraseña inválida");
    return;
  }

  const payload = {
    usuario: req.body.usuario,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({
    usuario: admin.usuario,
    token: token,
  });
});

authRouter.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
