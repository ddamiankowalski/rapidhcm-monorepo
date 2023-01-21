import { JwtPayload } from "jsonwebtoken";

interface RapidJwtPayload extends JwtPayload {
    exp: number;
    username: string;
}

export { RapidJwtPayload };