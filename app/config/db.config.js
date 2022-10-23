module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "mihai2002@",
  DB: "Ibustest",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};