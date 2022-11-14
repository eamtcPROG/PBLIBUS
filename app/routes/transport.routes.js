const controller = require("../controllers/transport.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/transport/add",     
      controller.CreateTransport
    );
    app.get("/api/transport/getall",     
    controller.FindAllTransport
    );
    app.get("/api/transport/:id",     
    controller.FindTransportById
    );
    app.delete("/api/transport/delete/:id",     
    controller.DeleteTransportById
    );
    app.put("/api/transport/update/:id",     
    controller.UpdateTransportById
    );
    app.get("/api/transport/get/getfk",     
    controller.FindAllTransportWithFK
    );
  };