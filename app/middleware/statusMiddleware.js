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





const statusMiddleware = {
    setStatusIdPending
};

module.exports = statusMiddleware;