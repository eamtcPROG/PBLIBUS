module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("Order", {
      IdOrder: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NumberPersons: {
        type: Sequelize.INTEGER
      },
      StartPointAddressId: {
        type: Sequelize.INTEGER
      },
      EndPointAddressId: {
        type: Sequelize.INTEGER
      },
      Date: {
        type: Sequelize.DATE
      },
      MoreDetails: {
        type: Sequelize.STRING
      }
    });
  
    return order;
  };