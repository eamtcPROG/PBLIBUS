module.exports = (sequelize, Sequelize) => {
    const address = sequelize.define("Address", {
      IdAddress: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LocationName: {
        type: Sequelize.STRING
      },
      AddressNumber: {
        type: Sequelize.STRING
      },
      AddressName: {
        type: Sequelize.STRING
      },
      CountryId: {
        type: Sequelize.INTEGER
      }
    }, {timestamps: false});
  
    return address;
  };