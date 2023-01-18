import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';

const authRouter = express.Router();

authRouter.post('/login', (req: Request, res: Response) => {
    const { login, password } = req.body;
    
    if(!process.env.TOKEN_SECRET || !process.env.TOKEN_SECRET_REFRESH){
        throw new Error('JWT_SECRETS must be defined in order for server to start up');
    }

    const accessToken = jwt.sign({ id: 1 }, process.env.TOKEN_SECRET, { expiresIn: 86400 });
    const refreshToken = jwt.sign({ id: 1 }, process.env.TOKEN_SECRET_REFRESH, { expiresIn: 525600 });

    res.send({ accessToken, refreshToken });
})

export default authRouter;