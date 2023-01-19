import { ExtractJwt, JwtFromRequestFunction, Strategy as JwtStrategy } from 'passport-jwt';
import dotenv from 'dotenv';
import { User } from '../../database/models';

dotenv.config();

interface JWTStrategyOptions {
    jwtFromRequest: JwtFromRequestFunction;
    secretOrKey: string | undefined;
}

export const jwtStrategyOpts: JWTStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
}

export const jwtStrategyFactory = (options: JWTStrategyOptions): JwtStrategy => new JwtStrategy(options, async function(jwt_payload, done): Promise<void> {
    const user = await User.findOne({ where: { username: jwt_payload.username } });
    
    if(!user) {
        done(null, false);
    } else {
        done(null, user);
    }
});