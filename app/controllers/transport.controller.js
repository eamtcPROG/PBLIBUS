const db = require("../models");

const Transport = db.transport;
exports.CreateTransport = (req, res) => {
    
    Transport.create({ 
        NumberSeats: req.body.numberseats,
        Plate: req.body.plate,
        TypeTransportId: req.body.typetransportid,
        ModelId: req.body.modelid
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Transport successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };


  exports.FindAllTransport = (req, res) => {
    
      Transport.findAll()
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

  exports.FindTransportById = (req, res) => {
    
    Transport.findOne({
      where: {
        IdTransport: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Transport Not found." });
        }
        
        
          return res.status(200).send({
            IdTransport: obj.IdTransport,
            NumberSeats: obj.NumberSeats,
            Plate: obj.Plate,
            TypeTransportId: obj.TypeTransportId,
            ModelId: obj.ModelId
           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteTransportById = (req, res) => {
    
  Transport.destroy({
    where: {
      IdTransport: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Transport Not found." });
      }else{
        return res.status(200).send({ message: "Transport Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateTransportById = (req, res) => {
    
  Transport.update({
        NumberSeats: req.body.numberseats,
        Plate: req.body.plate,
        TypeTransportId: req.body.typetransportid,
        ModelId: req.body.modelid
  },
  {
    where: {
      IdTransport: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Transport Not found." });
      }else{
        return res.status(200).send({ message: "Transport Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};