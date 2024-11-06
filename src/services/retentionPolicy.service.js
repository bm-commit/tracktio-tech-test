import { Op } from 'sequelize';
import Readings from '../models/readings.model.js';
import RetentionPolicy from '../models/retentionPolicy.model.js';

class RetentionPolicyService {
    static async getAllRetentionPolicies() {
        return await RetentionPolicy.findAll();
    }

    static async createOrUpdateRetentionPolicy(deviceId, retentionPeriodDays) {
        return await RetentionPolicy.upsert({
            deviceId,
            retentionPeriodDays,
        });
    }

    static async cleanOldData(){
        const currentDate = new Date();
    
        // Get all retention policies
        const policies = await RetentionPolicy.findAll();
        
        for (const policy of policies) {
            const retentionDate = new Date(currentDate);
            retentionDate.setDate(currentDate.getDate() - policy.retentionPeriodDays);
    
            await Readings.destroy({
                where: {
                    deviceId: policy.deviceId,
                    timestamp: {
                        [Op.lt]: retentionDate,
                    },
                },
            });
        }
    }
}

export default RetentionPolicyService;