const db = require("../models");
const { Op } = require("sequelize");
const Offer = db.offer;
exports.CreateOffer = (req, res) => {

  Offer.create({
    Price: req.body.price,
    OrderId: req.body.orderid,
    TrasporterId: req.body.trasporterid,
    StatusId: req.IdStatus

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

exports.FindTransporterWithOrders = (req, res) => {

  Offer.findAll({
    include: [{
      model: db.order,
      include: [{
        model: db.address,
        as: 'AddressStart',
        include: { model: db.country }
      },
      {
        model: db.address,
        as: 'AddressEnd',
        include: { model: db.country }
      }
      ]
    },
    {
      model: db.transporter,
      include: [{
        model: db.transport,
        include: [{
          model: db.model,
          include: {
            model: db.brand
          }
        },
        {
          model: db.typeTrasport
        },
        ]
      },
      {
        model: db.user
      }

      ]

    },
    {
      model: db.status
    }
    ],
    where: {
      '$Transporter.User.IdUser$': req.params.id
    }
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


exports.FindOffersForOrder = (req, res) => {

  Offer.findAll({
    include: [{
      model: db.transporter,
      include: [{
        model: db.transport,
        include: [{
          model: db.model,
          include: {
            model: db.brand
          }
        },
        {
          model: db.typeTrasport
        },
        ]
      },
      {
        model: db.user
      }
      ]

    },
    {
      model: db.status
    }]
    ,
    where: {
      OrderId: req.params.id
    }
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
        Price: obj.Price,
        OrderId: obj.OrderId,
        TrasporterId: obj.TrasporterId,

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
      } else {
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
    TrasporterId: req.body.trasporterid,
  },
    {
      where: {
        IdOffer: req.params.id
      }
    })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      } else {
        return res.status(200).send({ message: "Offer Updated." });
      }


    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateOfferByIdDecline = (req, res) => {

  Offer.update({
    StatusId: req.IdStatus
  },
    {
      where: {
        IdOffer: req.params.id
      }
    })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      } else {
        return res.status(200).send({ message: "Offer Status Updated." });
      }


    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.UpdateOfferByIdAccepted = (req, res) => {

  Offer.update({
    StatusId: req.IdStatus
  },
    {
      where: {
        IdOffer: req.params.id
      }
    })
    .then(obj => {

      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      } else {
        return res.status(200).send({ message: "Offer Status Updated." })
      }


    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.UpdateOfferByIdPending = (req, res) => {

  Offer.update({
    StatusId: req.IdStatusDecline
  },
    {
      where:

      {

        [Op.and]: [
          { OrderId: req.params.id },
          { StatusId: req.IdStatus }
        ]
      }
    })
    .then(obj => {

      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      } else {
        return res.status(200).send({ message: "Offer Status Updated." })
      }


    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateOfferToPending = (req, res) => {

  Offer.update({
    StatusId: req.IdStatusPending
  },
    {
      where: {  
        [Op.and]: [
          
          { StatusId: {[Op.or]: [req.IdStatusAccepted, req.IdStatus]} },          
          { OrderId: req.params.id },
        ]
      
      }
    }
  )
    .then(obj => {

      if (!obj) {
        return res.status(404).send({ message: "Offer Not found." });
      } else {
        console.log(req.IdStatusPedding)
        console.log(req.IdStatusAccepted)
        console.log(req.IdStatus)
        return res.status(200).send({ message: "Offer Status Updated." })
      }


    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.FindAllOfferWithFK = (req, res) => {

  Offer.findAll({
    include: { all: true }
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