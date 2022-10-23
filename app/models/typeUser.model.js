module.exports = (sequelize, Sequelize) => {
  const typeUser = sequelize.define("TypeUser", {
    IdTypeUser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING
    }
  });

  return typeUser;
};
