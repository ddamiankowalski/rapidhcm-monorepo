import daysjs from 'dayjs';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { Request, Response } from "express";
import RapidNullCookiesError from "../../errors/auth/nullcookies.error";
import RapidRefreshTokenError from "../../errors/auth/refreshtoken.error";
import { RapidJwtPayload } from "../interfaces/auth.interfaces";

const ACCESS_TOKEN_EXPIRE_VALUE = 10;
const REFRESH_TOKEN_EXPIRE_VALUE = 30;

const verifyRefreshToken = (refreshToken: string): RapidJwtPayload => {
    try {
        return jwt.verify(JSON.parse(refreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as RapidJwtPayload;
    } catch(err) {
        throw new RapidRefreshTokenError('Veryfying the refresh token unsuccessful');
    }
}

const getTokenFromRequestCookie = (req: Request) => {    
    if(!req.cookies.rapidRefreshToken) {
        throw new RapidNullCookiesError('No cookies found in the request');
    }
    return req.cookies;
}

const signAccessToken = (username: string): string => {
    return jwt.sign({ username }, process.env.TOKEN_SECRET ?? '', { expiresIn: ACCESS_TOKEN_EXPIRE_VALUE + 's' });
}

const signRefreshToken = (username: string): string => {
    return jwt.sign({ username }, process.env.TOKEN_SECRET_REFRESH ?? '', { expiresIn: REFRESH_TOKEN_EXPIRE_VALUE + 's' });
}

const hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
} 

const setHttpOnlyCookie = (res: Response, refreshToken: string): void => {
    res.cookie('rapidRefreshToken', JSON.stringify(refreshToken), {
        httpOnly: true,
        expires: daysjs().add(1, 'day').toDate(),
    })
}

export { 
    verifyRefreshToken, 
    getTokenFromRequestCookie, 
    signAccessToken,
    signRefreshToken, 
    hashPassword,
    setHttpOnlyCookie
 };