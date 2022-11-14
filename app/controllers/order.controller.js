const db = require("../models");

const Order = db.order;
exports.CreateOrder = (req, res) => {
    
    Order.create({ 
        NumberPersons: req.body.numberpersons,
        StartPointAddressId: req.body.startpointaddressid,
        EndPointAddressId: req.body.endpointaddressid,
        Date: req.body.date,
        MoreDetails:req.body.moredetails
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Order successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };


  exports.FindAllOrder = (req, res) => {
    
      Order.findAll()
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
  exports.FindAllOrderAndAddress = (req, res) => {

    Order.findAll({ include: [{
      model: db.address,
      as: 'AddressStart',
      include:{model: db.country}
    },
    {
      model: db.address,
      as: 'AddressEnd',
      include:{model: db.country}
    }
  ] })
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
  exports.FindOrderById = (req, res) => {
    
    Order.findOne({
      where: {
        IdOrder: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Order Not found." });
        }
        
        
          return res.status(200).send({
            NumberPersons: obj.NumberPersons,
            StartPointAddressId: obj.StartPointAddressId,
            EndPointAddressId: obj.EndPointAddressId,
            Date: obj.Date,
            MoreDetails: obj.MoreDetails

           
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteOrderById = (req, res) => {
    
  Order.destroy({
    where: {
      IdOrder: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Order Not found." });
      }else{
        return res.status(200).send({ message: "Order Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateOrderById = (req, res) => {
    
  Order.update({
        NumberPersons: req.body.numberpersons,
        StartPointAddressId: req.body.startpointaddressid,
        EndPointAddressId: req.body.endpointaddressid,
        Date: req.body.date,
        MoreDetails:req.body.moredetails
  },
  {
    where: {
      IdOrder: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Order Not found." });
      }else{
        return res.status(200).send({ message: "Order Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};