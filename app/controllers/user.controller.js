const db = require("../models");
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Customer Content.");
};

exports.trasporterBoard = (req, res) => {
  res.status(200).send("Trasporter Content.");
};

