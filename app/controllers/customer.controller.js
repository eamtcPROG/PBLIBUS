const db = require("../models");

const Customer = db.customer;
exports.CreateCustomer = (req, res) => {
    
    Customer.create({
      OrderId: req.body.orderid,
      UserId: req.body.userid,
    })
      .then(obj => {
        if (obj) {
          res.send({ message: "Added to Customer successfully!" });
        }
        
      }) 
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
  };

  
  exports.FindAllCustomer = (req, res) => {
    
      Customer.findAll()
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

  exports.FindCustomerById = (req, res) => {
    
    Customer.findOne({
      where: {
        IdCustomer: req.params.id
      }
    })
      .then(obj => {
        if (!obj) {
          return res.status(404).send({ message: "Customer Not found." });
        }
        
        
          return res.status(200).send({
            IdCustomer: obj.IdCustomer,
            OrderId: obj.OrderId,
            UserId: obj.UserId
          });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
exports.DeleteCustomerById = (req, res) => {
    
  Customer.destroy({
    where: {
      IdCustomer: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Customer Not found." });
      }else{
        return res.status(200).send({ message: "Customer Deleted." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateCustomerById = (req, res) => {
    
  Customer.update({
    OrderId: req.body.orderid,
    UserId: req.body.userid,
  },
  {
    where: {
      IdCustomer: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Customer Not found." });
      }else{
        return res.status(200).send({ message: "Customer Updated." });
      }
      
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.FindAllCustomerWithFK= (req, res) => {
 
  Customer.findAll({
    include: { all: true },
  })
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