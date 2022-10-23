module.exports = (sequelize, Sequelize) => {
    const transporter = sequelize.define("Transporter", {
      IdCoustomer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TransportId: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      }
    });
  
    return transporter;
  };