module.exports = (sequelize, Sequelize) => {
    const typeTrasport = sequelize.define("TypeTrasport", {
      IdTypeTrasport: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING
      }
    });
  
    return typeTrasport;
  };