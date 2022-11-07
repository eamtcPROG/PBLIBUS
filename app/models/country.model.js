module.exports = (sequelize, Sequelize) => {
    const country = sequelize.define("Country", {
      IdCountry: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return country;
  };