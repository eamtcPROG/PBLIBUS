const controller = require("../controllers/offer.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/offer/add",     
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
    app.put("/api/offer/update/:id",     
    controller.UpdateOfferById
    );
    app.get("/api/offer/get/getfk",     
    controller.FindAllOfferWithFK
    );
    app.get("/api/offer/getfororder/:id",     
    controller.FindOffersForOrder
    );
  };