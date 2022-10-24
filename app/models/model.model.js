module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("Model", {
      IdModel: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING
      },
      BrandId: {
        type: Sequelize.INTEGER
      }
    });
  
    return model;
  };