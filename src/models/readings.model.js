import { DataTypes } from 'sequelize';
import sequelizeInstance from '../db/connection.js'; 

const Readings = sequelizeInstance.define('Readings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Record time of the value',
    },
    data: {
        type: DataTypes.JSONB,
        allowNull: false,
        comment: 'Value of the reading',
    },
    deviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Identifier of the device',
    },
    readingTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'The type of reading (i.e., temperature)',
    },
    ownerOrganizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'The organization where the reading belongs to',
    },
}, {
    tableName: 'Readings',
    timestamps: false,
});

export default Readings;