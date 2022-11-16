import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Admin } from "../models/admin.model.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const admin = await Admin.findOne({
      where: { usuario: payload.usuario },
    });
    if (admin) {
      next(null, admin);
    } else {
      next(null, false);
    }
  })
);