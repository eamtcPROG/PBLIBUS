const controller = require("../controllers/model.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/model/add",     
      controller.CreateModel
    );
    app.get("/api/model/getall",     
    controller.FindAllModels
    );
    app.get("/api/model/getallwithbrand",     
    controller.FindAllModelsAndBrand
    );
    app.get("/api/model/:id",     
    controller.FindModelById
    );
    app.delete("/api/model/delete/:id",     
    controller.DeleteModelById
    );
    app.put("/api/model/update/:id",     
    controller.UpdateModelById
    );
  };