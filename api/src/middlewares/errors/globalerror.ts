import { Request, Response, NextFunction } from 'express';
import RapidError from '../../errors/rapid.error';

const globalErrorHandler = (err: RapidError, req: Request, res: Response, next: NextFunction) => {
    res.send({ errorCode: err.errorCode, errorType: err.errorType, message: err.message });
    next();
}

export default globalErrorHandler;