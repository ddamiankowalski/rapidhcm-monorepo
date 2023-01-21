import jwt, { JwtPayload } from "jsonwebtoken";

interface RapidJwtPayload {
    exp: number | false;
    username: string | false;
}

export const verifyRefreshToken = (refreshToken: string): RapidJwtPayload => {
    try {
        const verifyResult = jwt.verify(JSON.parse(refreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as JwtPayload;
        return verifyResult.exp && verifyResult ? { exp: verifyResult.exp, username: verifyResult.username } : { exp: false, username: false };
    } catch(err) {
        console.error('Could not verify token');
        throw(err);
    }
}  