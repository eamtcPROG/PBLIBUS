const db = require("../models");

const model = db.model;
exports.CreateModel = (req, res) => {

    model.create({

      Name: req.body.name,
      BrandId: req.body.brandid

    })
       .then(obj => {

        if(obj) {
          res.send({message: "Added to Model successfully!"});
        }
       })
       .catch(err=> {
        res.status(500).send({message: err.message })
       });
};


exports.FindAllModels = (req, res) => {

  model.findAll()
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
exports.FindAllModelsAndBrand = (req, res) => {

  db.brand.findAll({ include: model })
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
exports.FindModelById = (req, res)=> {

  model.findOne({
    where: {
      IdModel: req.params.id
    }
  })
   .then(obj =>{
    if (!obj){
      return res.status(400).send({message:"Model Not found"})
    }

    return res.status(200).send({
      IdModel: obj.IdModel,
      Name: obj.Name,
      BrandId: obj.BrandId,
    });
  })
  .catch(err =>{
    res.status(500).send({message: err.message});
  });
};

exports.DeleteModelById = (req, res) => {
    
    model.destroy({
      where: {
        IdModel: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Model Not found." });
        }else{
          return res.status(200).send({ message: "Model Deleted." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.UpdateModelById = (req, res) => {
      
    model.update({
      Name: req.body.name,
      BrandId: req.body.brandid,
    },
    {
      where: {
        IdModel: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Model Not found." });
        }else{
          return res.status(200).send({ message: "Model Updated." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };