import ReadingsService from '../services/readings.service.js';

const createReading = async (req, res) => {
    try {
        const newReadingData = req.body;
        const createdReading = await ReadingsService.saveLatestReading(newReadingData);
        res.status(201).json(createdReading);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getReadings = async  (req, res) => {
    try {
        const { organizationId } = req.query;
        const readings = await ReadingsService.getAll(organizationId);
        res.status(200).json(readings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { createReading, getReadings };
