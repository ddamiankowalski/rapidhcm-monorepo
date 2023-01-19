import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../database/models';
import daysjs from 'dayjs';

const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    if(!process.env.TOKEN_SECRET || !process.env.TOKEN_SECRET_REFRESH){
        throw new Error('JWT_SECRETS must be defined in order for server to start up');
    }

    const user = await User.findOne({ where: { username } });
    const result = await user?.validatePassword(password);
    
    if(!result) {
        res.status(403).send('Unauthorized');
    } else {
        const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: '10s' });
        const refreshToken = jwt.sign({ username }, process.env.TOKEN_SECRET_REFRESH, { expiresIn: '1d' });

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
        res.send('essa');
    }
})

export default authRouter;