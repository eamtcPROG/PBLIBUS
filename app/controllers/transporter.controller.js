const { where } = require("sequelize");
const db = require("../models");

const Transporter = db.transporter;
exports.CreateTransporter = (req, res) => {

  Transporter.create({
    TransportId: req.body.transportid,
    UserId: req.body.userid,
  })
    .then(obj => {
      if (obj) {
        res.send({ message: "Added to Transporter successfully!" });
      }

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};


exports.FindAllTransporter = (req, res) => {

  Transporter.findAll()
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

exports.FindAllTransporterWithFK = (req, res) => {
 
  db.transport.findAll({
    include: { all: true },
    where: {
      '$Transporters.UserId$': req.params.id
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
exports.FindTransporterById = (req, res) => {

  Transporter.findOne({
    where: {
      IdTransporter: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Transporter Not found." });
      }


      return res.status(200).send({
        IdTransporter: obj.IdTransporter,
        TransportId: obj.TransportId,
        UserId: obj.UserId
      });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.DeleteTransporterById = (req, res) => {

  Transporter.destroy({
    where: {
      IdTransporter: req.params.id
    }
  })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Transporter Not found." });
      } else {
        return res.status(200).send({ message: "Transporter Deleted." });
      }


    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateTransporterById = (req, res) => {

  Transporter.update({
    TransportId: req.body.transportid,
    UserId: req.body.userid,
  },
    {
      where: {
        IdTransporter: req.params.id
      }
    })
    .then(obj => {
      if (!obj) {
        return res.status(404).send({ message: "Transporter Not found." });
      } else {
        return res.status(200).send({ message: "Transporter Updated." });
      }


    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};