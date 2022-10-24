const controller = require("../controllers/customer.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/customer/add",     
      controller.CreateCustomer
    );
    app.get("/api/customer/getall",     
    controller.FindAllCustomer
    );
    app.get("/api/customer/:id",     
    controller.FindCustomerById
    );
    app.delete("/api/customer/delete/:id",     
    controller.DeleteCustomerById
    );
    app.put("/api/customer/update/:id",     
    controller.UpdateCustomerById
    );
  };