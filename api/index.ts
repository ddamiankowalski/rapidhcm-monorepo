import express, { Express } from 'express';
import cors from 'cors';

import authRouter from './src/routes/auth/auth';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import { initDBandModels } from './src/database/dbsequelize';
import { jwtStrategyFactory, jwtStrategyOpts } from './src/middlewares/passport/passport';

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(passport.initialize());
passport.use(jwtStrategyFactory(jwtStrategyOpts));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json('req.user');
})

app.listen(port, () => {
  console.log(`RapidHCM server has booted up succesfully at port ${port}`);
});

app.use('/auth', authRouter);

initDBandModels();

export default app;