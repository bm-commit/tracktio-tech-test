import express from 'express';
import cron from 'node-cron';
import morgan from 'morgan';
import sequelize from './db/connection.js';
import readingRoutes from './routes/readings.route.js';
import retentionRoutes from './routes/retentionPolicy.route.js';
import RetentionPolicyService from './services/retentionPolicy.service.js';

import "./db/associations.js";

const app = express();
app.use(express.json()); // Middleware JSON
app.use(morgan('dev')); // Log API requests

// Routes
app.use('/api/readings', readingRoutes);
app.use('/api/retention-policies', retentionRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            scheduleDataCleanup();
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

const scheduleDataCleanup = () => {
    cron.schedule('0 0 * * *', async () => {
        console.log('Running cleanOldData job...');
        try {
            await RetentionPolicyService.cleanOldData();
            console.log('Old data cleaned successfully.');
        } catch (error) {
            console.error('Error cleaning old data:', error);
        }
    });
};

startServer();