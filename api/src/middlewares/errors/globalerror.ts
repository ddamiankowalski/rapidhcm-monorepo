import { Request, Response, NextFunction } from 'express';
import RapidError from '../../errors/rapid.error';

const globalErrorHandler = (err: RapidError, req: Request, res: Response, next: NextFunction) => {
    if(!(err instanceof RapidError)) {
        returnUnknownError(res, err, next);
    } else {
        res.status(err.errorCode).send({ errorCode: err.errorCode, errorType: err.errorType, message: err.message });
        next();
    }
}

const returnUnknownError = (res: Response, err: Error, next: NextFunction): void => {
    res.status(500).send({ errorCode: 500, errorType: 'UNKNOWN_SERVER_ERROR', message: err.message })
    next();
}

export default globalErrorHandler;