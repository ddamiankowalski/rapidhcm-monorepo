import {
    ExtractJwt,
    JwtFromRequestFunction,
    Strategy as JwtStrategy,
} from 'passport-jwt';
import dotenv from 'dotenv';
import { User } from '../../database/models';
import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload, TokenExpiredError } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

dotenv.config();

interface JWTStrategyOptions {
    jwtFromRequest: JwtFromRequestFunction;
    secretOrKey: string | undefined;
}

export const jwtStrategyOpts: JWTStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
};

export const jwtStrategyFactory = (options: JWTStrategyOptions): JwtStrategy =>
    new JwtStrategy(options, async function (jwt_payload, done): Promise<void> {
        const user = await User.findOne({
            where: { username: jwt_payload.username },
        });

        if (!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    });

export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', async function (err, user, info) {
        if (info instanceof TokenExpiredError) {
            console.error(`Error occurred: ${info.message}: ${info.expiredAt}`)
            const { rapidRefreshToken } = req.cookies;

            try {
                const { exp, username } = jwt.verify(JSON.parse(rapidRefreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as JwtPayload;

                if(exp !== undefined) {
                    const expiryDate = new Date(exp).getTime();
                    const nowDate = new Date().getTime();

                    if(nowDate < expiryDate) {
                        res.status(401).send({ message: 'Refresh token expired' });
                    }
                    
                    const user = await User.findOne({ where: { username } });
                    if(!user) {
                        throw new Error('Unauthorized from refreshtoken');
                    } else {
                        console.log('Generating new accesstoken to use');
                        const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET ?? '', { expiresIn: '10s' });
                        res.status(400).send({ accessToken });
                    }
                }
            } catch(err) {
                console.error(err);
            }
        }
        req.user = user;
        next();
    })(req, res, next);
};
