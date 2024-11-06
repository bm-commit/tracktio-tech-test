import { DataTypes } from 'sequelize';
import sequelizeInstance from '../db/connection.js';

const Device = sequelizeInstance.define('Device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Name of the device',
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Type of the device (e.g., sensor, actuator)',
    },
    ownerOrganizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Identifier of the owning organization',
    },
}, {
    tableName: 'Devices',
    timestamps: false,
});

export default Device;
