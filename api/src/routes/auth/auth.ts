import jwt, { JwtPayload } from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../database/models';
import daysjs from 'dayjs';

const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    const result = await user?.validatePassword(password);
    
    if(!result) {
        res.status(403).send('Unauthorized');
    } else {
        const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET ?? '', { expiresIn: '10s' });
        const refreshToken = jwt.sign({ username }, process.env.TOKEN_SECRET_REFRESH ?? '', { expiresIn: '30s' });

        res.cookie('rapidRefreshToken', JSON.stringify(refreshToken), {
            httpOnly: true,
            expires: daysjs().add(1, 'day').toDate()
        })

        res.status(200).send({ accessToken });
    }
})

authRouter.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({ username, password: hashedPassword });
        res.send({ username, password, hashedPassword });
    } catch(error) {
        console.error('Something went wrong when adding a new user', error);
        res.status(400).send({ message: 'User already exists in the database' });
    }
})

authRouter.post('/refresh', async (req: Request, res: Response) => {
    const { rapidRefreshToken } = req.cookies;
    const { exp, username } = jwt.verify(JSON.parse(rapidRefreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as JwtPayload;

    if(exp !== undefined) {
        const expiryDate = new Date(exp).getTime();
        const nowDate = new Date().getTime();

        if(nowDate < expiryDate) {
            res.status(401).send({ message: 'Refresh token expired' });
        }

        const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET ?? '', { expiresIn: '10s' });
        res.status(200).send({ accessToken });
    }
})

export default authRouter;