import passport from "passport"
import passportJwt from "passport-jwt";
import User from '../services/user'
import { SECRET } from "../configs";

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET,
        },
        function (jwtPayload, done) {
            return User.getDataByID(jwtPayload.id)
                .then((user) => {
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                });
        }
    )
);