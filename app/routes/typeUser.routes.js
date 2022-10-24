const controller = require("../controllers/typeUser.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/typeuser/add",     
      controller.CreateTypeUser
    );
    app.get("/api/typeuser/getall",     
    controller.FindAllTypeUser
    );
    app.get("/api/typeuser/:id",     
    controller.FindTypeUserById
    );
    app.delete("/api/typeuser/delete/:id",     
    controller.DeleteTypeUserById
    );
    app.put("/api/typeuser/update/:id",     
    controller.UpdateTypeUserById
    );
  };