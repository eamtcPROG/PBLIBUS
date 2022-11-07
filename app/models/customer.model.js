module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("Customer", {
      IdCustomer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      OrderId: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      }
    }, {timestamps: false});
  
    return customer;
  };