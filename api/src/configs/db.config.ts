import { Dialect } from "sequelize";

export const dbConfig: RapidDBConfig = {
    TABLE_NAME: 'rapidhcm',
    USER_NAME: 'root',
    PASSWORD: 't4jn3h4slo',
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