import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    ModelAttributes,
    ModelOptions,
    Sequelize
} from 'sequelize';

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    private static modelConfig: ModelAttributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        firstName: {
            type: DataTypes.STRING
        },
    };

    private static dbConfig: ModelOptions = {
        modelName: 'User',
        tableName: 'users',
    };

    public static initModel(sequelize: Sequelize): typeof User {
        User.init(this.modelConfig, { sequelize, ...this.dbConfig });
        return User;
    }
}
