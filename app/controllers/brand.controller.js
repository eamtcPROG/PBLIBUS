const db = require("../models");

const brand = db.brand;
exports.CreateBrand = (req, res) => {

    brand.create({

      Name: req.body.name,

    })
       .then(obj => {

        if(obj) {
          res.send({message: "Added to Brand successfully!"});
        }
       })
       .catch(err=> {
        res.status(500).send({message: err.message })
       });
};


exports.FindAllBrands = (req, res) => {

  brand.findAll()
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

exports.FindBrandById = (req, res)=> {

  brand.findOne({
    where: {
      IdBrand: req.params.id
    }
  })
   .then(obj =>{
    if (!obj){
      return res.status(400).send({message:"Brand Not found"})
    }

    return res.status(200).send({
      IdBrand: obj.IdBrand,
      Name: obj.Name,
    });
  })
  .catch(err =>{
    resizeBy.status(500).send({message: err.message});
  });
};

exports.DeleteBrandById = (req, res) => {
    
    brand.destroy({
      where: {
        IdBrand: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Brand Not found." });
        }else{
          return res.status(200).send({ message: "Brand Deleted." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.UpdateBrandById = (req, res) => {
      
    brand.update({
      Name: req.body.name,
    },
    {
      where: {
        IdBrand: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Brand Not found." });
        }else{
          return res.status(200).send({ message: "Brand Updated." });
        }
        
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };