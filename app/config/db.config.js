require('dotenv').config();
module.exports = {
    HOST: "localhost",
    USER: process.env.USER_NAME,
    PASSWORD: process.env.USER_PASSWORD,
    DB: "Ibustest",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };