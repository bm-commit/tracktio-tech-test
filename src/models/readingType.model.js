import { DataTypes } from 'sequelize';
import sequelizeInstance from '../db/connection.js';

const ReadingType = sequelizeInstance.define('ReadingType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: 'Name of the reading type (e.g., temperature, humidity)',
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Description of the reading type',
    },
}, {
    tableName: 'ReadingTypes',
    timestamps: false,
});

export default ReadingType;
