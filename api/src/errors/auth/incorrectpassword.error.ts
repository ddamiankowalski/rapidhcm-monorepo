import RapidError from "../rapid.error";

class RapidIncorrectPasswordError extends RapidError {
    errorCode = 401;
    errorType = 'PASSWORD_INCORRECT';

    constructor(message: string) {
        super(message);
    } 
}

export default RapidIncorrectPasswordError;