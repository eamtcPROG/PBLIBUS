const db = require("../models");

const Address = db.address;
exports.CreateAddress = (req, res) => {
    
    Address.create({ 
        LocationName: req.body.locationname,
        AddressNumber: req.body.addressnumber,
        AddressName: req.body.addressname,
        CountryId: req.body.countryid
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Address successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };


  exports.FindAllAddress = (req, res) => {
    
      Address.findAll()
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

  exports.FindAddressById = (req, res) => {
    
    Address.findOne({
      where: {
        IdAddress: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Address Not found." });
        }
        
        
          return res.status(200).send({
            IdAddress: obj.IdAddress,
            LocationName: obj.LocationName,
            AddressNumber: obj.AddressNumber,
            AddressName: obj.AddressName,
            CountryId: obj.CountryId
           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteAddressById = (req, res) => {
    
  Address.destroy({
    where: {
      IdAddress: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Address Not found." });
      }else{
        return res.status(200).send({ message: "Address Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateAddressById = (req, res) => {
    
  Address.update({
    LocationName: req.body.locationname,
        AddressNumber: req.body.addressnumber,
        AddressName: req.body.addressname,
        CountryId: req.body.countryid
  },
  {
    where: {
      IdAddress: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Address Not found." });
      }else{
        return res.status(200).send({ message: "Address Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};