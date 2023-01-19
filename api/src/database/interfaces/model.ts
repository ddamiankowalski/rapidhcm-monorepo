import { Sequelize } from 'sequelize';

export interface RapidDBConfig {
    sequelize: Sequelize;
    modelName?: string;
    tableName?: string;
}
