import Readings from '../models/readings.model.js';
import ReadingType from '../models/readingType.model.js';
import Organization from '../models/organization.model.js';
import Device from '../models/device.model.js';
import RetentionPolicy from '../models/retentionPolicy.model.js';

// Readings relations
Readings.belongsTo(Device, {
    foreignKey: 'deviceId',
    as: 'device',
});

Readings.belongsTo(ReadingType, {
    foreignKey: 'readingTypeId',
    as: 'readingType',
});

Readings.belongsTo(Organization, {
    foreignKey: 'ownerOrganizationId',
    as: 'organization',
});

// Reading type relations
ReadingType.hasMany(Readings, {
    foreignKey: 'readingTypeId',
    as: 'readings',
});

// Organization relations
Organization.hasMany(Device, {
    foreignKey: 'organizationId',
    as: 'devices',
});

// Device relations
Device.belongsTo(Organization, {
    foreignKey: 'organizationId',
    as: 'organization',
});

// RetentionPolicy relations
RetentionPolicy.belongsTo(Device, {
    foreignKey: 'deviceId',
    as: 'device',
});
