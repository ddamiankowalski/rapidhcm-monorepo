import jwt, { JwtPayload } from "jsonwebtoken";

interface RapidJwtPayload extends JwtPayload {
    exp: number | undefined;
    username: string;
}

export const verifyRefreshToken = (refreshToken: string): RapidJwtPayload => {
    try {
        return jwt.verify(JSON.parse(refreshToken), process.env.TOKEN_SECRET_REFRESH ?? '') as RapidJwtPayload;
    } catch(err) {
        console.error('Could not verify token');
        throw(err);
    }
}  