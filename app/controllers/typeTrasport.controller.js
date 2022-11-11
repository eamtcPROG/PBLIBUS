const db = require("../models");

const typeTrasport = db.typeTrasport;
exports.CreateTypeTrasport = (req, res) => {

    typeTrasport.create({

      Name: req.body.name,

    })
       .then(obj => {

        if(obj) {
          res.send({message: "Added to Type Transport successfully!"});
        }
       })
       .catch(err=> {
        res.status(500).send({message: err.message })
       });
};


exports.FindAllTypeTrasports = (req, res) => {

  typeTrasport.findAll()
  .then(obj => {
    console.log(obj);


    if(obj) {
      res.json(obj);
    }
  })
  .catch(err => {
    res.status(500).send({message: err.message});
  });
};

exports.FindTypeTrasportById = (req, res)=> {

  typeTrasport.findOne({
    where: {
        IdTypeTrasport: req.params.id
    }
  })
   .then(obj =>{
    if (!obj){
      return res.status(400).send({message:"TypeTrasport Not found"})
    }

    return res.status(200).send({
        IdTypeTrasport: obj.IdTypeTrasport,
      Name: obj.Name,
    });
  })
  .catch(err =>{
    resizeBy.status(500).send({message: err.message});
  });
};

exports.DeleteTypeTrasportById = (req, res) => {
    
    typeTrasport.destroy({
      where: {
        IdTypeTrasport: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "TypeTrasport Not found." });
        }else{
          return res.status(200).send({ message: "TypeTrasport Deleted." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.UpdateTypeTrasportById = (req, res) => {
      
    typeTrasport.update({
      Name: req.body.name,
    },
    {
      where: {
        IdTypeTrasport: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "TypeTrasport Not found." });
        }else{
          return res.status(200).send({ message: "TypeTrasport Updated." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };