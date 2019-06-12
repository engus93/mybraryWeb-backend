// Import module
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

// My files
import "./env";
import { prisma } from "../generated/prisma-client";

// Middle ware
export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (error) throw error;

    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);

//   JWT token setting
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
