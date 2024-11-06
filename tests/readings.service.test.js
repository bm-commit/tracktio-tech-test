import ReadingsService from '../src/services/readings.service.js';
import Readings from '../src/models/readings.model.js';

jest.mock('../src/models/readings.model.js', () => ({
  findAll: jest.fn(),
  create: jest.fn(),
  destroy: jest.fn(),
  sequelize: {
    transaction: jest.fn(),
  },
}));

describe('ReadingsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all readings for an organization', async () => {
    const mockReadings = [{ id: 1, data: { temperature: 22 }, timestamp: '2024-01-01' }];
    Readings.findAll.mockResolvedValue(mockReadings);

    const readings = await ReadingsService.getAll(1);
    expect(Readings.findAll).toHaveBeenCalledWith({ where: { ownerOrganizationId: 1 } });
    expect(readings).toEqual(mockReadings);
  });

  it('should save a new reading', async () => {
    const newReading = {
      ownerOrganizationId: 1,
      deviceId: 1,
      readingTypeId: 1,
      data: { temperature: 22 },
    };
    
    const createdReading = { ...newReading, id: 1, timestamp: new Date() };
    
    Readings.create.mockResolvedValue(createdReading);

    const savedReading = await ReadingsService.save(
      newReading.ownerOrganizationId,
      newReading.deviceId,
      newReading.readingTypeId,
      newReading.data
    );

    expect(Readings.create).toHaveBeenCalledWith({
      ownerOrganizationId: newReading.ownerOrganizationId,
      deviceId: newReading.deviceId,
      readingTypeId: newReading.readingTypeId,
      data: newReading.data,
      timestamp: expect.any(Date),
    });

    expect(savedReading).toEqual(createdReading);
  });

  it('should save the latest reading and rollback if error occurs', async () => {
    const newReadingData = {
      ownerOrganizationId: 1,
      deviceId: 1,
      readingTypeId: 1,
      data: { temperature: 22 },
    };

    const mockTransaction = { commit: jest.fn(), rollback: jest.fn() };
    Readings.sequelize.transaction.mockResolvedValue(mockTransaction);

    Readings.destroy.mockRejectedValue(new Error('Database error'));

    try {
      await ReadingsService.saveLatestReading(newReadingData);
    } catch (error) {
      expect(mockTransaction.rollback).toHaveBeenCalled();
      expect(mockTransaction.commit).not.toHaveBeenCalled();
    }
  });
});
