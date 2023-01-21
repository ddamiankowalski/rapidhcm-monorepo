import RapidError from "../rapid.error";

class RapidNullCookiesError extends RapidError {
    errorCode = 403;
    errorType = 'RAPID_COOKIE_MISSING';

    constructor(message: string) {
        super(message);
    }
}

export default RapidNullCookiesError;