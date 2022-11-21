const db = require("../models");
const Status = db.status;

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



const statusMiddleware = {
    setStatusIdPending,
    setStatusIdAccepted,
    setStatusIdDecline,
    setStatusIdPendingAndDecline,
    setStatusIdDeclineToPending
};

module.exports = statusMiddleware;