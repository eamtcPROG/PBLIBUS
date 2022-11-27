const controller = require("../controllers/offer.controller");
const { statusMiddleware } = require("../middleware");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/offer/add",
    [
      statusMiddleware.setStatusIdPending
    ],
    controller.CreateOffer
  );
  app.get("/api/offer/getall",
    controller.FindAllOffer
  );
  app.get("/api/offer/getallwithorder/:id",
    controller.FindTransporterWithOrders
  );
  app.get("/api/offer/:id",
    controller.FindOfferById
  );
  app.delete("/api/offer/delete/:id",
    controller.DeleteOfferById
  );
  app.delete("/api/offer/deletefororder/:id",
  [
    statusMiddleware.checkOfferExists
  ],
    controller.DeleteOfferByOrderId
  );
  app.put("/api/offer/update/:id",
    controller.UpdateOfferById
  );
  app.put("/api/offer/updatedicline/:id",
    [
      statusMiddleware.setStatusIdDecline
    ],
    controller.UpdateOfferByIdDecline
  );
  app.put("/api/offer/updateaccepted/:id",
    [
      statusMiddleware.setStatusIdAccepted
    ],
    controller.UpdateOfferByIdAccepted
  );
  app.put("/api/offer/updatepending/:id",
    [
      statusMiddleware.setStatusIdPendingAndDecline
    ],
    controller.UpdateOfferByIdPending
  );

  app.put("/api/offer/updatecancel/:id",
    [
      statusMiddleware.setStatusIdDeclineToPending
    ],
    controller.UpdateOfferToPending
  );
  app.get("/api/offer/get/getfk",
    controller.FindAllOfferWithFK
  );
  app.get("/api/offer/getfororder/:id",
    controller.FindOffersForOrder
  );
};