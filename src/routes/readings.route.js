import express from 'express';
import readingsController from '../controllers/readings.controller.js';

const router = express.Router();

router.post('/', readingsController.createReading);
router.get('/', readingsController.getReadings);
//router.get('/:id', readingsController.getReadingById);
//router.delete('/:id', readingsController.deleteReading);

export default router;