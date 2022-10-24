const db = require("../models");

const Offer = db.offer;
exports.CreateOffer = (req, res) => {
    
    Offer.create({ 
        Price: req.body.price,
        OrderId: req.body.orderid,
        TransporterId: req.body.trasporterid,
       
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Offer successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };


  exports.FindAllOffer = (req, res) => {
    
      Offer.findAll()
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

  exports.FindOfferById = (req, res) => {
    
    Offer.findOne({
      where: {
        IdOffer: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Offer Not found." });
        }
        
        
          return res.status(200).send({
            IdOffer: obj.IdOffer,
            Price: req.body.Price,
            OrderId: req.body.OrderId,
            TransporterId: req.body.TransporterId,
           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteOfferById = (req, res) => {
    
  Offer.destroy({
    where: {
      IdOffer: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      }else{
        return res.status(200).send({ message: "Offer Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateOfferById = (req, res) => {
    
  Offer.update({
    Price: req.body.price,
    OrderId: req.body.orderid,
    TransporterId: req.body.trasporterid,
  },
  {
    where: {
      IdOffer: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      }else{
        return res.status(200).send({ message: "Offer Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};