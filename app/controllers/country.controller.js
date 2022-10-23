const db = require("../models");

const Country = db.country;
exports.CreateCountry = (req, res) => {
    
    Country.create({
      
      Name: req.body.name,
      
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Country successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };