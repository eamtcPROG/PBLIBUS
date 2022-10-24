module.exports = (sequelize, Sequelize) => {
    const offer = sequelize.define("Offer", {
      IdOffer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Price: {
        type: Sequelize.DOUBLE
      },
      OrderId: {
        type: Sequelize.INTEGER
      },
      TrasporterId: {
        type: Sequelize.INTEGER
      }
    });
  
    return offer;
  };