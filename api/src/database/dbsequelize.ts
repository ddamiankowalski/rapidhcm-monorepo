import { Sequelize } from 'sequelize';
import { syncAllModels } from './models/user';

const sequelize: Sequelize = new Sequelize('rapidhcm', 'root', 't4jn3h4slo', {
    host: 'localhost',
    dialect: 'mysql'
});

const initializeSequelizeConnection = async () => {
    try {
        await sequelize.authenticate();
        await syncAllModels(sequelize);
        console.log('Connection to Sequelize has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { initializeSequelizeConnection, sequelize };