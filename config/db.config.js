import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  logging: Boolean(process.env.DB_LOGGING)
});

// Function to connect to MySQL
export const connectMySQL = async () => {
  try {
    await sequelize.authenticate();  // Tests the connection
    console.log('Connected to MySQL');
    await sequelize.sync();  // Ensures models are synced with the database
  } catch (error) {
    console.error('Error connecting to MySQL:', error.message);
  }
};

export default sequelize;
