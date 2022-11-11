const controller = require("../controllers/typeTrasport.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/typeTrasport/add",     
      controller.CreateTypeTrasport
    );
    app.get("/api/typeTrasport/getall",     
    controller.FindAllTypeTrasports
    );
    app.get("/api/typeTrasport/:id",     
    controller.FindTypeTrasportById
    );
    app.delete("/api/typeTrasport/delete/:id",     
    controller.DeleteTypeTrasportById
    );
    app.put("/api/typeTrasport/update/:id",     
    controller.UpdateTypeTrasportById
    );
  };