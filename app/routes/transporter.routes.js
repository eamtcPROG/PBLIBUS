const controller = require("../controllers/transporter.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/transporter/add",     
      controller.CreateTransporter
    );
    app.get("/api/transporter/getall",     
    controller.FindAllTransporter
    );
    app.get("/api/transporter/:id",     
    controller.FindTransporterById
    );
    app.delete("/api/transporter/delete/:id",     
    controller.DeleteTransporterById
    );
    app.put("/api/transporter/update/:id",     
    controller.UpdateTransporterById
    );
  };