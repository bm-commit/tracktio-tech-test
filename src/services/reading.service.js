
export default class Reading {
    constructor(ownerOrganizationId, deviceId, readingTypeId, data, timestamp = new Date()) {
        this.ownerOrganizationId = ownerOrganizationId;
        this.deviceId = deviceId;
        this.readingTypeId = readingTypeId;
        this.data = data;
        this.timestamp = timestamp;

        this.validateInputs();
    }

    validateInputs() {
        if (!this.ownerOrganizationId || !this.deviceId || !this.readingTypeId || !this.data) {
            throw new Error('ownerOrganizationId, deviceId, readingTypeId and data fields are required.');
        }
        if (typeof this.data !== 'object') {
            throw new Error('Data must be an object.');
        }
    }

    toJSON() {
        return {
            ownerOrganizationId: this.ownerOrganizationId,
            deviceId: this.deviceId,
            readingTypeId: this.readingTypeId,
            data: this.data,
            timestamp: this.timestamp
        };
    }
}
