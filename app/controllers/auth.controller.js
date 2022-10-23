const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const TypeUser = db.typeUser;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    
    Name: req.body.name,
    Surname: req.body.surname,
    Email: req.body.email,
    Password: bcrypt.hashSync(req.body.password, 8),
    Birthdate: req.body.birthdate,
    TypeUserId: req.body.typeUserId,
    
  })
    .then(user => {
      if (user) {
        res.send({ message: "User registered successfully!" });
      }
      
    }) 
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      Email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.Password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      
      if(token){
        return res.status(200).send({
          IdUser: user.IdUser,
          Name: user.Name,
          Surname: user.Surname,
          Email: user.Email,
          Birthdate: user.Birthdate,
          TypeUserId: user.TypeUserId,
          accessToken: token
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
