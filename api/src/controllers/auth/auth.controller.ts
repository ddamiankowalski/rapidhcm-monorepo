import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from 'bcrypt';
import RapidNullCookiesError from "../../errors/auth/nullcookies.error";
import RapidRefreshTokenError from "../../errors/auth/refreshtoken.error";
import { RapidJwtPayload } from "../interfaces/auth.interfaces";

const ACCESS_TOKEN_EXPIRE_VALUE = 10;

const verifyRefreshToken = (refreshToken: string): RapidJwtPayload => {
    try {
        return jwt.verify(JSON.parse(refreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as RapidJwtPayload;
    } catch(err) {
        throw new RapidRefreshTokenError('Veryfying the refresh token went wrong');
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

const hashPassword = async (password: string, next: NextFunction): Promise<string | undefined> => {
    try {
        return await bcrypt.hash(password, 10);
    } catch(err) {
        next(err);
    }
} 

const registerUser = () => {

}

export { 
    verifyRefreshToken, 
    getTokenFromRequestCookie, 
    signAccessToken, 
    hashPassword,
    registerUser
 };