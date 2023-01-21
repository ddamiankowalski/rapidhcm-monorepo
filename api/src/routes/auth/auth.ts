import jwt from 'jsonwebtoken';
import express, { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../database/models';
import daysjs from 'dayjs';
import * as AuthController from '../../controllers/auth/auth.controller';
import { RapidJwtPayload } from '../../controllers/interfaces/auth.interfaces';
import RapidRefreshExpiredError from '../../errors/auth/refreshexpired.error';

const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    const result = await user?.validatePassword(password);

    if (!result) {
        res.status(403).send('Unauthorized');
    } else {
        const accessToken = jwt.sign(
            { username },
            process.env.TOKEN_SECRET ?? '',
            { expiresIn: '10s' }
        );
        const refreshToken = jwt.sign(
            { username },
            process.env.TOKEN_SECRET_REFRESH ?? '',
            { expiresIn: '30s' }
        );

        res.cookie('rapidRefreshToken', JSON.stringify(refreshToken), {
            httpOnly: true,
            expires: daysjs().add(1, 'day').toDate(),
        });

        res.status(200).send({ accessToken });
    }
});

authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const hashedPassword = await AuthController.hashPassword(password, next);

    
    try {
        await User.create({ username, password: hashedPassword ?? 's' });
        res.send({ username, password, hashedPassword });
    } catch (error) {
        console.error('Something went wrong when adding a new user', error);
        res.status(400).send({
            message: 'User already exists in the database',
        });
    }
});

authRouter.post('/refresh', (req: Request, res: Response) => {
    const { rapidRefreshToken } = AuthController.getTokenFromRequestCookie(req);
    const { exp, username } = AuthController.verifyRefreshToken(rapidRefreshToken) as RapidJwtPayload

    if(new Date().getTime() < new Date(exp).getTime()) {
        throw new RapidRefreshExpiredError('Refresh token has expired');
    }

    const accessToken = AuthController.signAccessToken(username);
    res.status(200).send({ accessToken });
});

export default authRouter;
