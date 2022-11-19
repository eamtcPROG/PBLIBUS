module.exports = (sequelize, Sequelize) => {
    const status = sequelize.define("Status", {
      IdStatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return status;
  };