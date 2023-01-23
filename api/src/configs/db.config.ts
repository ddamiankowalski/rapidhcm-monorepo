import { Dialect } from "sequelize";

export const dbConfig: RapidDBConfig = {
    TABLE_NAME: 'rapidhcm',
    USER_NAME: 'sammy',
    PASSWORD: 'password',
    HOST: 'localhost',
    DIALECT: 'mysql'
}

interface RapidDBConfig {
    TABLE_NAME: string;
    USER_NAME: string;
    PASSWORD: string;
    HOST: string,
    DIALECT: Dialect
}