
import Reading from './reading.service.js';
import Readings from '../models/readings.model.js';

class ReadingsService {
    static async getAll(organizationId) {
        return await Readings.findAll({ where: { ownerOrganizationId: organizationId } });
    }

    static async save(ownerOrganizationId, deviceId, readingTypeId, data) {
        try {
            const reading = await Readings.create({
                ownerOrganizationId: ownerOrganizationId,
                deviceId: deviceId,
                readingTypeId:readingTypeId,
                data: data,
                timestamp: new Date()
            });
            return reading;
        } catch (error) {
            throw new Error('Error inserting reading: ' + error.message);
        }
    }

    static async saveLatestReading(newReadingData){
        const { ownerOrganizationId, deviceId, readingTypeId, data } = newReadingData;
        const reading = new Reading(ownerOrganizationId, deviceId, readingTypeId, data);
        const transaction = await Readings.sequelize.transaction();
        try {
            await Readings.destroy({
                where: {
                    readingTypeId: reading.readingTypeId,
                    ownerOrganizationId: reading.ownerOrganizationId,
                },
                transaction,
            });
            const createdReading = await Readings.create(reading.toJSON(), 
            { transaction });
            await transaction.commit();
            return createdReading;
        } catch (error) {
            await transaction.rollback();
            throw new Error('Error managing readings: ' + error.message);
        }
    }
}

export default ReadingsService;
