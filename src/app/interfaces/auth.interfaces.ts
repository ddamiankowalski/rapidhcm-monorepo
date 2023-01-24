export interface RapidAccessToken {
    accessToken: string;
}

export interface RapidLoginPayload {
    username: string,
    password: string,
    rememberUser: boolean
}