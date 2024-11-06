import Reading from '../src/services/reading.service.js';

describe('Reading Class', () => {
    test('should create an instance of Reading with valid inputs', () => {
        const reading = new Reading(1, 1, 1, { temperature: 22.5 });
        
        expect(reading.ownerOrganizationId).toBe(1);
        expect(reading.deviceId).toBe(1);
        expect(reading.readingTypeId).toBe(1);
        expect(reading.data).toEqual({ temperature: 22.5 });
        expect(reading.timestamp).toBeInstanceOf(Date);
    });

    test('should throw an error when required fields are missing', () => {
        expect(() => new Reading(null, 1, 1, { temperature: 22.5 })).toThrow(
            'ownerOrganizationId, deviceId, readingTypeId and data fields are required.'
        );
        expect(() => new Reading(1, null, 1, { temperature: 22.5 })).toThrow(
            'ownerOrganizationId, deviceId, readingTypeId and data fields are required.'
        );
        expect(() => new Reading(1, 1, null, { temperature: 22.5 })).toThrow(
            'ownerOrganizationId, deviceId, readingTypeId and data fields are required.'
        );
        expect(() => new Reading(1, 1, 1, null)).toThrow(
            'ownerOrganizationId, deviceId, readingTypeId and data fields are required.'
        );
    });

    test('should throw an error when data is not an object', () => {
        expect(() => new Reading(1, 1, 1, 'not an object')).toThrow(
            'Data must be an object.'
        );
    });

    test('should return a JSON representation of the Reading instance', () => {
        const reading = new Reading(1, 1, 1, { temperature: 22.5 });
        const json = reading.toJSON();
        
        expect(json).toEqual({
            ownerOrganizationId: 1,
            deviceId: 1,
            readingTypeId: 1,
            data: { temperature: 22.5 },
            timestamp: reading.timestamp
        });
    });
});