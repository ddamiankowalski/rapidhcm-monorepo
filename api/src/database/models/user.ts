import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    ModelAttributes,
    ModelOptions,
    Sequelize
} from 'sequelize';

import bcrypt from 'bcrypt';

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
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(60, true),
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
    };

    private static dbConfig: ModelOptions = {
        modelName: 'User',
        tableName: 'users',
    };

    declare password: string;
    declare username: string;
    declare email?: string;

    public static initModel(sequelize: Sequelize): typeof User {
        User.init(this.modelConfig, { sequelize, ...this.dbConfig });
        return User;
    }

    public async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
}
