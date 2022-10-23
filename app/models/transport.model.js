module.exports = (sequelize, Sequelize) => {
    const transport = sequelize.define("Transport", {
      IdTransport: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NumberSeats: {
        type: Sequelize.INTEGER
      },
      Plate: {
        type: Sequelize.STRING
      },
      TypeTransportId: {
        type: Sequelize.INTEGER
      },
      ModelId: {
        type: Sequelize.INTEGER
      }
    });
  
    return transport;
  };