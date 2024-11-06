import { DataTypes } from 'sequelize';
import sequelizeInstance from '../db/connection.js';

const Organization = sequelizeInstance.define('Organization', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Name of the organization',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Address of the organization',
    },
}, {
    tableName: 'Organizations',
    timestamps: false,
});

export default Organization;
