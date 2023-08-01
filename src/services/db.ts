// src/services/db.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'oracle',
  host: 'localhost',
  port: 1521,
  dialectOptions: {
    connectString: 'localhost/XE', // Replace with your Oracle connection string
  },
});

export default sequelize;
