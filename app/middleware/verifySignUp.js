const db = require("../models");
const TypeUser = db.typeUser;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Name
  User.findOne({
    where: {
      Name: req.body.name
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Name is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });

  });
};

checkTypeUserExisted = (req, res, next) => {
  if (req.body.typeUser) {
    for (let i = 0; i < req.body.typeUser.length; i++) {
      if (!TypeUser.includes(req.body.typeUser[i])) {
        res.status(400).send({
          message: "Failed! TypeUser does not exist = " + req.body.typeUser[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkTypeUserExisted: checkTypeUserExisted
};

module.exports = verifySignUp;
