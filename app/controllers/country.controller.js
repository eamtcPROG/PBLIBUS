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


  exports.FindAllCountry = (req, res) => {
    
      Country.findAll()
        .then(obj => {
          console.log(obj);
        
          if (obj) {
            res.json(obj);
          }
          
        }) 
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  };

  exports.FindCountryById = (req, res) => {
    
    Country.findOne({
      where: {
        IdCountry: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Country Not found." });
        }
        
        
          return res.status(200).send({
            IdCountry: obj.IdCountry,
            Name: obj.Name,
           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

