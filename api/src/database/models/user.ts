import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
    declare id: string;
    declare firstName: string;
}

const syncAllModels = async (sequelize: Sequelize) => {
    try {
        User.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            username: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }
        }, {
            sequelize: sequelize,
            modelName: 'User',
            tableName: 'users'
        });
        await User.sync({ force: true });

        const user = await User.create({ username: 'Huh', password: 'Test' });
        await user.save();
    } catch(error) {
        console.error('Unable to create a model');
    }
}

export { syncAllModels };