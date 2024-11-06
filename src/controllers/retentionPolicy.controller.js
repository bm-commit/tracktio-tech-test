import RetentionPolicyService from '../services/retentionPolicy.service.js';

const getRetentionPolicies = async (req, res) => {
    try {
        const retentionPolicies = await RetentionPolicyService.getAllRetentionPolicies();
        res.status(200).json(retentionPolicies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createRetentionPolicy = async (req, res) => {
    const { deviceId, retentionPeriodDays } = req.body;
    try {
        const [policy, created] = await RetentionPolicyService.createOrUpdateRetentionPolicy(deviceId, retentionPeriodDays);
        res.status(created ? 201 : 200).json(policy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default { getRetentionPolicies, createRetentionPolicy }