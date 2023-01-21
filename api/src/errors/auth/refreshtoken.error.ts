import RapidError from "../rapid.error";

class RapidRefreshTokenError extends RapidError {
    errorCode = 401;
    errorType = 'REFRESH_TOKEN_VERYFING';

    constructor(message: string) {
        super(message);
    }
}

export default RapidRefreshTokenError;