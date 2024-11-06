import express from 'express';
import retentionController from '../controllers/retentionPolicy.controller.js';

const router = express.Router();

router.get('/', retentionController.getRetentionPolicies);
router.post('/', retentionController.createRetentionPolicy);

export default router;