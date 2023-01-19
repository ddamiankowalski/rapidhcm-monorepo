import { Sequelize } from 'sequelize';
import { dbConfig } from '../configs/db.config';

import * as AppModels from './models/index';

const { TABLE_NAME, USER_NAME, PASSWORD, HOST, DIALECT } = dbConfig;

const sequelize: Sequelize = new Sequelize(TABLE_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT
});

const initDBandModels = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        initModels(sequelize);
        await syncModels(sequelize);
      } catch (error) {
        console.error('Initialization went wrong');
    }
}

const initModels = (sequelize: Sequelize): void => {
    try {
        AppModels.User.initModel(sequelize);
    } catch(error) {
        console.error('Could not initialize Models', error);
    }
}

const syncModels = async (sequelize: Sequelize): Promise<void> => {
    try {
        await sequelize.sync({ force: true });
    } catch(error) {
        console.error('Could not sync models', error);
    }
}

export { initDBandModels, sequelize };