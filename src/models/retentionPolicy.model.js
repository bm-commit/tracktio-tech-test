import { DataTypes } from 'sequelize';
import sequelizeInstance from '../db/connection.js'; 

const RetentionPolicy = sequelizeInstance.define('RetentionPolicy', {
    deviceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        comment: 'Identifier of the device',
    },
    retentionPeriodDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
        },
        comment: 'Retention period in days',
    }
}, {
    tableName: 'RetentionPolicies',
    timestamps: false
});

export default RetentionPolicy;