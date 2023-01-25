module.exports = (sequelize, Sequelize) => {
    const transporter = sequelize.define("Transporter", {
      IdTransporter: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TransportId: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      Rating: {
        type: Sequelize.DOUBLE,
        defaultValue:5.0
      }
    }, {timestamps: false});
  
    return transporter;
  };