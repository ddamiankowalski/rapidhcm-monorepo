import { NextFunction, Request, Response } from "express"

const runAsyncWrapper = (callback: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return function (req: Request, res: Response, next: NextFunction) {
      callback(req, res, next)
        .catch(next)
    }
}

export { runAsyncWrapper }