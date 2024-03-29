const db = require("../models");
const Status = db.status;
const Offer = db.offer;


setStatusIdPending = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Pending'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }
            next();
        });

    }

};


setStatusIdPendingAndDecline = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Pending'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

        });

        Status.findOne({
            where: {
                Name: 'Decline'
            }
        }).then(e => {
            if (e) {
                req.IdStatusDecline = e.IdStatus;
            }

            next();
        });
    }

};
setStatusIdDeclineToPending = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Pending'
            }
        }).then(e => {
            if (e) {
                req.IdStatusPending = e.IdStatus;
            }

        });

        Status.findOne({
            where: {
                Name: 'Accepted'
            }
        }).then(e => {
            if (e) {
                req.IdStatusAccepted = e.IdStatus;
            }

        });

        Status.findOne({
            where: {
                Name: 'Decline'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

            next();
        });
    }

};
setStatusIdAccepted = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Accepted'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

            next();
        });

    }

};


setStatusIdDone = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Done'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

            next();
        });

    }

};

setStatusIdRated = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Rated'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

            next();
        });

    }

};

setStatusIdDecline = (req, res, next) => {

    if (req != undefined) {

        Status.findOne({
            where: {
                Name: 'Decline'
            }
        }).then(e => {
            if (e) {
                req.IdStatus = e.IdStatus;
            }

            next();
        });
    }

};

checkOfferExists = (req, res, next) => {
    // Name
    if (req != undefined) {
      // Email
      Offer.findOne({
        where: {
            OrderId: req.params.id
        }
      }).then(user => {
        if (!user) {
          return res.status(201).send({
            message: "No!,offer"
          });
          
        }
  
        next();
      });
    }
  
  };


const statusMiddleware = {
    setStatusIdPending,
    setStatusIdAccepted,
    setStatusIdDecline,
    setStatusIdPendingAndDecline,
    setStatusIdDeclineToPending,
    checkOfferExists,
    setStatusIdDone,
    setStatusIdRated
};

module.exports = statusMiddleware;