const db = require("../models");
const Transporter = db.transporter;

getTransporterPreviousRating = (req, res, next) => {

    if (req != undefined) {

        Transporter.findOne({
            where: {
                IdTransporter: req.params.id
            }
        }).then(e => {
            if (e) {
                req.previousRating = e.Rating;
            }
            next();
        });

    }

};

const transporterMiddleware = {
    getTransporterPreviousRating
};

module.exports = transporterMiddleware;