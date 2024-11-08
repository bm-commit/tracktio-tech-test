import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const sequelizeInstance = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

export default sequelizeInstance;