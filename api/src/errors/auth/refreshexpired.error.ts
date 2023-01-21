import RapidError from "../rapid.error";

class RapidRefreshExpiredError extends RapidError {
    errorCode = 401;
    errorType = 'REFRESH_TOKEN_EXPIRED';

    constructor(message: string) {
        super(message);
    }
}

export default RapidRefreshExpiredError;