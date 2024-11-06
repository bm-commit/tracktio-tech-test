// eslint-disable-next-line no-unused-vars
const mockReadings = [
    {
        id: 1,
        timestamp: new Date('2024-11-01T12:00:00Z'),
        data: {
            temperature: 22.5,
            humidity: 45,
        },
        deviceId: 1,
        readingTypeId: 1,
        ownerOrganizationId: 1,
    },
    {
        id: 2,
        timestamp: new Date('2024-11-02T12:00:00Z'),
        data: {
            temperature: 23.0,
            humidity: 50,
        },
        deviceId: 2,
        readingTypeId: 1,
        ownerOrganizationId: 1,
    },
    {
        id: 3,
        timestamp: new Date('2024-11-03T12:00:00Z'),
        data: {
            temperature: 21.0,
            humidity: 40,
        },
        deviceId: 1,
        readingTypeId: 1,
        ownerOrganizationId: 2,
    },
    {
        id: 4,
        timestamp: new Date('2024-11-04T12:00:00Z'),
        data: {
            pressure: 1012,
        },
        deviceId: 3,
        readingTypeId: 2,
        ownerOrganizationId: 1,
    },
];

// eslint-disable-next-line no-unused-vars
const mockRetentionPolicies = [
    {
        deviceId: 1,
        retentionPeriodDays: 30,
    },
    {
        deviceId: 2,
        retentionPeriodDays: 60,
    },
    {
        deviceId: 3,
        retentionPeriodDays: 14,
    },
    {
        deviceId: 4,
        retentionPeriodDays: 90,
    },
];

// eslint-disable-next-line no-unused-vars
const mockReadingTypes = [
    {
        id: 1,
        name: 'Temperature',
        description: 'Measures the ambient temperature.',
    },
    {
        id: 2,
        name: 'Humidity',
        description: 'Measures the moisture level in the air.',
    },
    {
        id: 3,
        name: 'Pressure',
        description: 'Measures atmospheric pressure.',
    },
    {
        id: 4,
        name: 'Light',
        description: 'Measures light intensity.',
    },
];

// eslint-disable-next-line no-unused-vars
const mockDevice = {
    id: 1,
    name: "sensor_1",
    type: "temperature_sensor",
    location: "location",
    ownerOrganizationId: 1,
};

// eslint-disable-next-line no-unused-vars
const mockOrganization = {
    id: 1,
    name: "organization",
    address: "some random address",
};