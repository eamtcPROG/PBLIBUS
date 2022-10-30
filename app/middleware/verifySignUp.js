const db = require("../models");
const TypeUser = db.typeUser;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  // Name
  if (req != undefined) {
    // Email
    User.findOne({
      where: {
        Email: req.body.email
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
  }

};

checkTypeUserExisted = (req, res, next) => {
  if (req != undefined) {
    for (let i = 0; i < req.body.typeUser.length; i++) {
      if (!TypeUser.includes(req.body.typeUser[i])) {
        res.status(400).send({
          message: "Failed! TypeUser does not exist = " + req.body.typeUser[i]
        });
        return;
      }
    }
  

  next();
  }
};

const verifySignUp = {
  checkDuplicateEmail,
  checkTypeUserExisted
};

module.exports = verifySignUp;
