const controller = require("../controllers/address.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/address/add",     
      controller.CreateAddress
    );
    app.get("/api/address/getall",     
    controller.FindAllAddress
    );
    app.get("/api/address/:id",     
    controller.FindAddressById
    );
    app.delete("/api/address/delete/:id",     
    controller.DeleteAddressById
    );
    app.put("/api/address/update/:id",     
    controller.UpdateAddressById
    );
    app.get("/api/address/get/getfk",     
    controller.FindAllAdressWithFK
    );
  };