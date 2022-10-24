const controller = require("../controllers/order.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/order/add",     
      controller.CreateOrder
    );
    app.get("/api/order/getall",     
    controller.FindAllOrder
    );
    app.get("/api/order/:id",     
    controller.FindOrderById
    );
    app.delete("/api/order/delete/:id",     
    controller.DeleteOrderById
    );
    app.put("/api/order/update/:id",     
    controller.UpdateOrderById
    );
  };