import express, { Request, Response } from 'express';

import * as AuthController from '../../controllers/auth/auth.controller';
import { RapidJwtPayload } from '../../controllers/interfaces/auth.interfaces';
import { runAsyncWrapper } from '../utils/asyncwrapper';
import { User } from '../../database/models';
import RapidIncorrectPasswordError from '../../errors/auth/incorrectpassword.error';

const authRouter = express.Router();

authRouter.post(
    '/login',
    runAsyncWrapper(async (req: Request, res: Response) => {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });
        if (!user) {
            throw new RapidIncorrectPasswordError(
                'Username or password is incorrect'
            );
        }

        if (!(await user.validatePassword(password))) {
            throw new RapidIncorrectPasswordError(
                'Username or password is incorrect'
            );
        }

        const accessToken = AuthController.signAccessToken(username);
        const refreshToken = AuthController.signRefreshToken(username);

        AuthController.setHttpOnlyCookie(res, refreshToken);

        res.status(200).send({ accessToken });
    })
);

authRouter.post(
    '/register',
    runAsyncWrapper(async (req: Request, res: Response) => {
        const { username, password } = req.body;

        const hashedPassword = await AuthController.hashPassword(password);
        await User.create({ username, password: hashedPassword });

        res.status(200).send({ username, password, hashedPassword });
    })
);

authRouter.post('/refresh', (req: Request, res: Response) => {
    const { rapidRefreshToken } = AuthController.getTokenFromRequestCookie(req);
    const { username } = AuthController.verifyRefreshToken(
        rapidRefreshToken
    ) as RapidJwtPayload;

    const accessToken = AuthController.signAccessToken(username);
    res.status(200).send({ accessToken });
});

export default authRouter;
