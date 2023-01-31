export interface RapidAccessToken {
    accessToken: string;
}

export interface RapidLoginPayload {
    username: string,
    password: string,
    rememberUser: boolean
}

export interface RapidSignUpResponse {
    username: string;
    hashedpassword: string;
}

export interface RapidSignUpPayload {
    username: string;
    password: string;
    email: string;
    language: string;
}