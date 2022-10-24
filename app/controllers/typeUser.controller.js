const db = require("../models");

const TypeUser = db.typeUser;
exports.CreateTypeUser = (req, res) => {
    
    TypeUser.create({
      
      Name: req.body.name,
      
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to TypeUser successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };


  exports.FindAllTypeUser = (req, res) => {
    
      TypeUser.findAll()
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

  exports.FindTypeUserById = (req, res) => {
    
    TypeUser.findOne({
      where: {
        IdTypeUser: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "TypeUser Not found." });
        }
        
        
          return res.status(200).send({
            IdTypeUser: obj.IdTypeUser,
            Name: obj.Name,
           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteTypeUserById = (req, res) => {
    
  TypeUser.destroy({
    where: {
      IdTypeUser: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "TypeUser Not found." });
      }else{
        return res.status(200).send({ message: "TypeUser Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateTypeUserById = (req, res) => {
    
  TypeUser.update({
    Name: req.body.name,
  },
  {
    where: {
      IdTypeUser: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "TypeUser Not found." });
      }else{
        return res.status(200).send({ message: "TypeUser Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};