module.exports = (sequelize, Sequelize) => {
    const brand = sequelize.define("Brand", {
      IdBrand: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return brand;
  };