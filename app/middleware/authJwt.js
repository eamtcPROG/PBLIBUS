const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.IdUser = decoded.id;
    next();
  });
};

isCustomer = (req, res, next) => {
  User.findByPk(req.IdUser).then(user => {
    user.getTypeUsers().then(typeUsers => {
      for (let i = 0; i < typeUsers.length; i++) {
        if (typeUsers[i].Name === "Customer") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Customer Role!"
      });
      return;
    });
  });
};

isTrasporter = (req, res, next) => {
  User.findByPk(req.IdUser).then(user => {
    user.getTypeUsers().then(typeUsers => {
      for (let i = 0; i < typeUsers.length; i++) {
        if (typeUsers[i].Name === "Trasporter") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Trasporter Role!"
      });
    });
  });
};

isTrasporterOrCustomer = (req, res, next) => {
  User.findByPk(req.IdUser).then(user => {
    user.getTypeUsers().then(typeUsers => {
      for (let i = 0; i < typeUsers.length; i++) {
        if (typeUsers[i].Name === "Trasporter") {
          next();
          return;
        }

        if (typeUsers[i].Name === "Customer") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Trasporter or Customer Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isCustomer: isCustomer,
  isTrasporter: isTrasporter,
  isTrasporterOrCustomer: isTrasporterOrCustomer
};
module.exports = authJwt;
