module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    IdUser: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    },
    Surname: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
    Birthdate: {
      type: Sequelize.DATE
    },
    TypeUserId: {
      type: Sequelize.INTEGER
    }
  }, {timestamps: false});

  return User;
};
