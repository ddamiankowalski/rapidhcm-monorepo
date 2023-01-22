import RapidError from "../rapid.error";

class RapidUserNotFoundError extends RapidError {
    errorCode = 403;
    errorType = 'USER_NOT_FOUND';

    constructor(message: string) {
        super(message);
    } 
}

export default RapidUserNotFoundError;