import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import authRouter from './src/routes/auth/auth';

import { initializeSequelizeConnection } from './src/database/dbsequelize';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`RapidHCM server has booted up succesfully at port ${port}`);
});

app.get('/api/users', (req: Request, res: Response) => {
  const users = [{ id: 1, name: 'Damian' }];
  res.send(users);
})

app.use('/auth', authRouter);

initializeSequelizeConnection()

export default app;